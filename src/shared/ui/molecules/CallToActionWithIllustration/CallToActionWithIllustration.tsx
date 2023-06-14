import { Flex, Container, Heading, Stack, Text, Button } from "@chakra-ui/react";
import { Illustration } from "shared/ui/atoms/Illustration";

export const CallToActionWithIllustration = ({ children, ...rest }: any) => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Negociar um imóvel{" "}
          <Text as={"span"} color={"orange.400"}>
            ficou fácil
          </Text>
        </Heading>
        <Text fontSize={"xl"} color={"gray.300"} maxW={"3xl"}>
          Agora você pode negociar seu imóvel com facilidade, rapidez e segurança. Banco de
          Trocas Imóveis, desde 1992 realizando bons negócios imobiliários para ambas as
          partes, voltando ou recebendo dinheiro de volta
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Quero anunciar
          </Button>
          <Button bg={"gray.400"} _hover={{ bg: "gray.500" }} rounded={"full"} px={6}>
            Saiba mais
          </Button>
        </Stack>
        <Flex w={"full"}>
          <Illustration height={{ sm: "24rem", lg: "28rem" }} mt={{ base: 12, sm: 16 }} />
        </Flex>
      </Stack>
    </Container>
  );
};
