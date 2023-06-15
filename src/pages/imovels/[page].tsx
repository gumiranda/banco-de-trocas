import { ImovelListTablePage } from "screens/imovel/list/table";
import { GetServerSideProps } from "next";
import { withSSRAuth } from "shared/libs/utils";
import { getImovels } from "entidades/imovel/imovel.api";
export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  const page = Number(context?.query?.page ?? 1);
  const data = await getImovels(page, context);
  return {
    props: {
      data,
      page,
    },
  };
});

export default ImovelListTablePage;
