import { Box, Head } from "shared/ui";
import { ImovelDetails } from "entidades/imovel/details";
import { ImovelProps } from "entidades/imovel";
type ImovelDetailsProps = {
  data: ImovelProps;
  id: string;
};
export const ImovelDetailsPage = ({ data }: ImovelDetailsProps) => {
  const props = { imovel: data };
  return (
    <>
      <Head
        title={"Belezix Admin | Imovels"}
        description="Página de detalhes de imovels do painel de Admin Belezix"
      />
      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <ImovelDetails {...props} />
      </Box>
    </>
  );
};
