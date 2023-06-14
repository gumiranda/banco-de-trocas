import { Text } from "shared/ui/atoms";
import NextLink from "next/link";

export const Logo = () => {
  return (
    <NextLink href="/home">
      <Text
        textAlign={"left"}
        fontWeight="bold"
        letterSpacing="tight"
        ml={4}
        w="64"
        fontSize={["2xl", "3xl"]}
      >
        Banco de
        <Text color="green.300" marginLeft="2" as="span">
          Trocas
        </Text>
      </Text>
    </NextLink>
  );
};
