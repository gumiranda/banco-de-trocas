import type { NextPage } from "next";
import {
  Head,
  Flex,
  CallToActionWithIllustration,
  SplitWithImage,
  SmallWithSocial,
  ContactForm,
  Sobre,
  About,
} from "shared/ui";
export const HomePage: NextPage = () => {
  return (
    <>
      <Head
        title="Banco de trocas | Anuncie já seu imóvel"
        description="Atuando no mercado imobiliário desde 1992. Estamos buscando constantemente o melhor negócio pra você, seja para comprar, vender ou trocar seu imóvel.
        Cadastre seu imóvel do Litoral Paulista de Peruíbe até Ubatuba. Residências, Apartamentos, Sítios, Terrenos, Imóveis Rurais ou Comerciais."
      />
      <Flex minW="100%" justifyContent="center" flexDirection={"column"}>
        <CallToActionWithIllustration />
        <SplitWithImage />
        <Sobre />
        <About />
        <ContactForm />
        <SmallWithSocial />
      </Flex>
    </>
  );
};
