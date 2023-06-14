import { Box, Head } from "shared/ui";
import { CategoryDetails } from "entidades/category/details";
import { CategoryProps } from "entidades/category";
type CategoryDetailsProps = {
  data: CategoryProps;
  id: string;
};
export const CategoryDetailsPage = ({ data }: CategoryDetailsProps) => {
  const props = { category: data };
  return (
    <>
      <Head
        title={"Banco de Trocas | Categorias"}
        description="Página de detalhes de categorias do painel de Admin Belezix"
      />
      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <CategoryDetails {...props} />
      </Box>
    </>
  );
};
