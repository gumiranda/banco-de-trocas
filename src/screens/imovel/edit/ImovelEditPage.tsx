import { Box, Head } from "shared/ui";
import { EditImovelForm } from "features/imovel/edit";
import { ImovelProps } from "entidades/imovel";
type ImovelEditProps = {
  data: ImovelProps;
  id: string;
};
export const ImovelEditPage = ({ data, id }: ImovelEditProps) => {
  const props = { imovel: data };
  return (
    <>
      <Head
        title={"Banco de Trocas | Imóveis"}
        description="Página de edição de imóveis site Banco de Trocas Imóveis."
      />
      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <EditImovelForm {...props} />
      </Box>
    </>
  );
};
