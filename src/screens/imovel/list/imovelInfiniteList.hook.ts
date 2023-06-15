import { useMutation } from "@tanstack/react-query";
import { useUi } from "shared/libs";
import { api } from "shared/api";
import { queryClientInstance } from "shared/api";
import { useRouter } from "next/router";
import { useGetInfiniteImovels } from "entidades/imovel/imovel.lib";
import { makeDeleteImovelController } from "slices/imovel/controllers";

export const useImovelInfiniteList = () => {
  const router = useRouter();
  const { showModal, loading } = useUi();
  const all = useGetInfiniteImovels({
    getNextPageParam: (lastPage: any, pages) => lastPage.next,
    getPreviousPageParam: (firstPage: any, pages) => firstPage.prev,
  });
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = all || {};
  const firstPage: any = data?.pages[0];
  const total: any = (firstPage?.total as any) || {};
  const deleteSelectedAction = async (item: any) => {
    deleteImovel.mutateAsync([item]);
  };
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
        queryClientInstance.invalidateQueries(["imovelsInfinite", data?.pages ?? 1]);
        queryClientInstance.refetchQueries(["imovelsInfinite", data?.pages]);
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
  return {
    deleteSelectedAction,
    isFetching,
    error,
    total,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    loading,
  };
};
