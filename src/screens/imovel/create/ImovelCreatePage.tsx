import { Box, Head } from "shared/ui";
import { ImovelProps } from "entidades/imovel";
import { CreateImovelForm } from "features/imovel/create";

export const ImovelCreatePage = () => {
  return (
    <>
      <Head
        title={"Belezix Admin | Imovels"}
        description="Página de criação de imovels do painel de Admin Belezix"
      />
      <Box flex="1" borderRadius={8} bg="purple.800" p="8">
        <CreateImovelForm />
      </Box>
    </>
  );
};
