import { GetImovelsResponse } from "entidades/imovel/imovel.api";
import { useState, useEffect } from "react";
import { useUi } from "shared/libs";
import { api, queryClientInstance } from "shared/api";
import { useMutation } from "@tanstack/react-query";
import { ImovelProps } from "entidades/imovel";
import { useRouter } from "next/router";
import { makeDeleteImovelController } from "slices/imovel/controllers";
type ImovelListHook = {
  initialData: GetImovelsResponse;
  page: number;
};
export const useImovelList = (data: ImovelListHook) => {
  const router = useRouter();
  const { showModal } = useUi();
  const [page, setPage] = useState(data.page);
  const [imovels, setImovels] = useState(data?.initialData?.imovels ?? []);
  const handlePrefetchImovel = async ({ id: imovelId }: any) => {};
  const deleteImovel = useMutation(
    async (imovelsToDelete: any = []) => {
      try {
        if (imovelsToDelete?.length > 0) {
          return Promise.all(
            imovelsToDelete?.map?.((imovel: any) =>
              makeDeleteImovelController().handle({
                query: {
                  fields: { id: imovel.id },
                  options: {},
                },
              })
            )
          );
        }
        return null;
      } catch (error) {
        showModal({
          content: "Ocorreu um erro inesperado no servidor, tente novamente mais tarde",
          title: "Erro no servidor",
          type: "error",
        });
      }
    },
    {
      onSuccess: () => {
        queryClientInstance.invalidateQueries(["imovels", data.page]);
        queryClientInstance.refetchQueries(["imovels", data.page]);
        router.reload();
      },
      onError: () => {
        showModal({
          content: "Ocorreu um erro inesperado no servidor, tente novamente mais tarde",
          title: "Erro no servidor",
          type: "error",
        });
      },
      retry: 3,
    }
  );
  const deleteSelectedAction = async () => {
    deleteImovel.mutateAsync(imovels.filter((imovel: ImovelProps) => imovel.value));
  };
  const changePage = (newpage: number) => {
    router.replace(`/imovels/${newpage}`);
  };
  useEffect(() => {
    setImovels(data?.initialData?.imovels ?? []);
  }, [data?.initialData?.imovels]);
  return {
    imovels,
    setImovels,
    handlePrefetchImovel,
    deleteSelectedAction,
    page,
    setPage: changePage,
    total: data?.initialData?.totalCount,
  };
};
