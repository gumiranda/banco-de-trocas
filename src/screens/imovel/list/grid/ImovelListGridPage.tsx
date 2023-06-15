import { InfiniteList, GenericGrid, Head } from "shared/ui";
import { useImovelInfiniteList } from "../imovelInfiniteList.hook";
import { useImovelUi } from "entidades/imovel/imovel.ui";

export const ImovelGridPage = () => {
  const {
    isFetching,
    error,
    data: fetchData,
    fetchNextPage,
    hasNextPage,
    deleteSelectedAction,
    loading,
  } = useImovelInfiniteList();
  const imovelGridProps = {
    imovels:
      fetchData?.pages
        ?.map?.((page: any) => page?.imovels)
        ?.reduce?.((a: any, b: any) => a.concat(b)) ??
      fetchData ??
      [],
    isLoading: loading,
    error,
    isFetching,
    deleteSelectedAction,
    fields: [
      { id: "name", label: "Nome", displayKeyText: true },
      { id: "created_at", label: "Data de criação", displayKeyText: true },
    ],
  };
  const items =
    imovelGridProps?.imovels?.map?.((item: any) => ({
      item,
      fields: imovelGridProps.fields,
      mainField: "name",
    })) ?? [];
  const { renderItem } = useImovelUi({ deleteSelectedAction });
  return (
    <>
      <Head
        title={"Banco de Trocas | Imóveis"}
        description="Página de listagem de imóveis do site Banco de Trocas"
      />
      <InfiniteList
        hasNextPage={hasNextPage as any}
        fetchNextPage={fetchNextPage}
        entityName="imovels"
      >
        <GenericGrid
          items={items}
          renderItem={renderItem}
          route={"/imovels/list"}
          routeList={"/imovels/1"}
          routeCreate={"/imovels/create"}
          entityDisplayName={"Imovel"}
          title={"Imovels"}
          {...imovelGridProps}
        />
      </InfiniteList>
    </>
  );
};
