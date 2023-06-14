import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { ReactNode } from "react";
import { SocialButton } from "shared/ui/atoms";
export const SmallWithSocial = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          © {new Date().getFullYear()} Gilson Gonçalves de Aguiar. Entre já em contato pelo
          Whatsapp (11) 991843119
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Facebook"} href={"https://www.facebook.com/imoveis5060"}>
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={"Whatsapp"}
            href={"https://api.whatsapp.com/send?phone=5511991843119&text=Ola."}
          >
            <FaWhatsapp />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"https://www.facebook.com/imoveis5060"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
