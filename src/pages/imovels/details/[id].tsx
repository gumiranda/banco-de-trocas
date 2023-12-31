import { ImovelDetailsPage } from "screens/imovel/details";
import { getImovelById } from "entidades/imovel/imovel.api";
import { GetServerSideProps } from "next";
import { withSSRAuth } from "shared/libs/utils";
export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  const id = context?.query?.id;
  if (!id || typeof id !== "string") {
    return {
      notFound: true,
    };
  }
  const data = await getImovelById(id, context);
  return {
    props: {
      data,
      id,
    },
  };
});
export default ImovelDetailsPage;
