import type { NextPage } from "next";
import { Head, Flex, CallToActionWithIllustration, SplitWithImage } from "shared/ui";
export const HomePage: NextPage = () => {
  return (
    <>
      <Head
        title="Banco de trocas | Anuncie já seu imóvel"
        description="Em época de crise quando o dinheiro desaparece, para se vender um imóvel nem como uma boa prece. Banco de Trocas de Imóveis, desde 1992 realizando negócios imobiliários bons para ambas as partes, voltando ou recebendo dinheiro de volta. Cadastre seu imóvel São Paulo Capital, Litoral Paulista, Interior Paulista. Residências, Apartamentos, Sítios, Terrenos, Imóveis Rurais ou Comerciais. Corretor credenciado Gilson Gonçalves de Aguiar - creci 36.924 f   11- 99184-3119 zap"
      />
      <Flex minW="100%" justifyContent="center" flexDirection={"column"}>
        <CallToActionWithIllustration />
        <SplitWithImage />
      </Flex>
    </>
  );
};
