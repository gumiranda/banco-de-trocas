import { useUi } from "shared/libs";
import {
  CreateImovelFormData,
  SubmitCreateImovelHandler,
  useCreateImovelLib,
} from "./createImovel.lib";
import { useRouter } from "next/router";
import { api } from "shared/api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
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
  };
};
