import { useUi } from "shared/libs";
import {
  CreateImovelFormData,
  SubmitCreateImovelHandler,
  useCreateImovelLib,
} from "./createImovel.lib";
import { useRouter } from "next/router";
import { supabase } from "shared/api/supabase";
import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { makeAddImovelController } from "slices/imovel/controllers";
export const useCreateImovel = () => {
  const { showModal } = useUi();
  const router = useRouter();
  const [aceitatroca, setAceitaTroca] = useState(false);
  const [interessadoem, setInteressadoem] = useState("trocar");
  const handleChangeInteressadoEm = (event: React.ChangeEvent<{ value: unknown }>) => {
    setInteressadoem(event.target.value as string);
  };
  const [tipodepropriedade, settipodepropriedade] = useState("casa");
  const handleChangetipodepropriedade = (event: React.ChangeEvent<{ value: unknown }>) => {
    settipodepropriedade(event.target.value as string);
  };
  const [uf, setuf] = useState("SP");
  const handleChangeuf = (event: React.ChangeEvent<{ value: unknown }>) => {
    setuf(event.target.value as string);
  };
  const [faixadepreco, setfaixadepreco] = useState("entre55000e100000");
  const handleChangefaixadepreco = (event: React.ChangeEvent<{ value: unknown }>) => {
    setfaixadepreco(event.target.value as string);
  };
  const [valordevenda, setvalordevenda] = useState("entre55000e100000");
  const handleChangevalordevenda = (event: React.ChangeEvent<{ value: unknown }>) => {
    setvalordevenda(event.target.value as string);
  };
  const [valordemercado, setvalordemercado] = useState("entre55000e100000");
  const handleChangevalordemercado = (event: React.ChangeEvent<{ value: unknown }>) => {
    setvalordemercado(event.target.value as string);
  };
  const [numerobanheiros, setnumerobanheiros] = useState(1);
  const handleChangenumerobanheiros = (event: React.ChangeEvent<{ value: unknown }>) => {
    setnumerobanheiros(event.target.value as number);
  };
  const [numeroquartos, setnumeroquartos] = useState(1);
  const handleChangenumeroquartos = (event: React.ChangeEvent<{ value: unknown }>) => {
    setnumeroquartos(event.target.value as number);
  };
  const createImovel = useMutation(async (imovel: CreateImovelFormData) => {
    try {
      const { data, error } = await makeAddImovelController().handle({
        body: {
          ...imovel,
        },
      });
      if (!data) {
        showModal({
          content: "Ocorreu um erro inesperado no servidor, tente novamente mais tarde",
          title: "Erro no servidor",
          type: "error",
        });
        return;
      }
      showModal({
        content:
          "Imóvel anunciado com sucesso, em breve o corretor irá entrar em contato com você!",
        title: "Sucesso",
        type: "success",
      });
      router.push("/");
      return data;
    } catch (error) {
      showModal({
        content: "Ocorreu um erro inesperado no servidor, tente novamente mais tarde",
        title: "Erro no servidor",
        type: "error",
      });
    }
  }, {});
  const { register, handleSubmit, formState } = useCreateImovelLib();
  const handleCreateImovel: SubmitCreateImovelHandler = async (
    values: CreateImovelFormData
  ) => {
    try {
      const files = await handleUploadPhoto({ bucketName: values?.email });
      await createImovel.mutateAsync({
        ...values,
        aceitatroca,
        interessadoem,
        tipodepropriedade,
        uf,
        faixadepreco,
        valordemercado,
        valordevenda,
        numeroquartos,
        numerobanheiros,
      });
    } catch (error) {
      showModal({
        content: "Ocorreu um erro inesperado no servidor, tente novamente mais tarde",
        title: "Erro no servidor",
        type: "error",
      });
    }
  };

  const [selectedFiles, setSelectedFiles] = useState<any>([]);
  const handleUploadPhoto = async ({ bucketName = "imoveis" }) => {
    // eslint-disable-next-line prefer-const
    let files = [];
    const { data, error } = await supabase.storage.createBucket(bucketName);
    if (error) {
      throw error;
    }
    for (const file of selectedFiles) {
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(file?.name as any, file);
      if (error) {
        throw error;
      }
      if (data) {
        const download = await supabase.storage.from(bucketName).download(data?.path);
        files.push({ ...data, ...download?.data });
      }
    }
    return files;
  };
  const fileInputRef = useRef<any>(null);
  const handleFileChange = (event: any) => {
    const files = event.target.files;
    const fileList: any = Array.from(files).filter((file: any) =>
      file.type.startsWith("image/")
    );
    setSelectedFiles(fileList);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current && fileInputRef.current.click) {
      fileInputRef.current.click();
    }
  };
  return {
    formState,
    register,
    handleSubmit,
    handleCreateImovel,
    aceitatroca,
    setAceitaTroca,
    interessadoem,
    setInteressadoem,
    handleChangeInteressadoEm,
    tipodepropriedade,
    handleChangetipodepropriedade,
    uf,
    handleChangeuf,
    faixadepreco,
    handleChangefaixadepreco,
    valordemercado,
    handleChangevalordemercado,
    valordevenda,
    handleChangevalordevenda,
    numeroquartos,
    handleChangenumeroquartos,
    numerobanheiros,
    handleChangenumerobanheiros,
    selectedFiles,
    setSelectedFiles,
    fileInputRef,
    handleFileChange,
    handleButtonClick,
  };
};
