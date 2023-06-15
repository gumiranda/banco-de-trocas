import { Box, Head } from "shared/ui";
import { ImovelProps } from "entidades/imovel";
import { CreateImovelForm } from "features/imovel/create";

export const ImovelCreatePage = () => {
  return (
    <>
      <Head
        title={"Banco de Trocas | Imóveis"}
        description="Página de criação de imóveis do site Banco de Trocas"
      />
      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <CreateImovelForm />
      </Box>
    </>
  );
};
