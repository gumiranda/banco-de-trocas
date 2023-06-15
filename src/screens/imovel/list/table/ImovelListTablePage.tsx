import { Box, GenericTable, Head, Pagination } from "shared/ui";
import { GetImovelsResponse } from "entidades/imovel/imovel.api";
import { useImovelList } from "../imovelList.hook";
type ImovelListTablePageProps = {
  data: GetImovelsResponse;
  page: number;
};
const Text = ({ id, ...data }: any) => {
  return <h1 data-testid={"h1TestId" + id}>{data[id]}</h1>;
};
export const ImovelListTablePage = ({ page = 0, data }: ImovelListTablePageProps) => {
  const {
    imovels,
    setImovels,
    handlePrefetchImovel,
    deleteSelectedAction,
    total,
    setPage,
  } = useImovelList({
    page,
    initialData: data,
  });
  return (
    <>
      <Head
        title={"Belezix Admin | Imovels"}
        description="Página de listagem de imovels do painel de Admin Belezix"
      />
      <Box borderRadius={8} bg="purple.800" p="4" flexGrow="1">
        <GenericTable
          deleteSelectedAction={deleteSelectedAction}
          isLoading={false}
          items={imovels}
          fields={[
            { id: "name", label: "Nome", displayKeyText: true },
            {
              id: "createdAt",
              label: "Data de criação",
              displayKeyText: false,
              children: <Text />,
            },
          ]}
          setItems={setImovels}
          linkOnMouseEnter={handlePrefetchImovel}
          error={undefined}
          route={"/imovels"}
          routeDetails={"/imovels/details"}
          routeCreate={"/imovels/create"}
          routeList={"/imovels/list"}
          title={"Imovels"}
        />
        <Pagination
          onPageChange={setPage}
          currentPage={page}
          totalCountOfRegisters={total}
        />
      </Box>
    </>
  );
};
