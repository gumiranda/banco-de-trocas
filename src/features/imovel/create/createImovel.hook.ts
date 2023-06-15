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
      router.push("/imovels/1");
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
    await createImovel.mutateAsync({ ...values, aceitatroca });
  };
  return {
    formState,
    register,
    handleSubmit,
    handleCreateImovel,
    aceitatroca,
    setAceitaTroca,
  };
};
