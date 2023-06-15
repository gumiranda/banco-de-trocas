import { Flex, GenericDetailsItem, Text, Button } from "shared/ui";
import { Heading, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiAddLine } from "react-icons/ri";
import { ImovelProps } from "../imovel.model";
type ImovelDetailsProps = {
  imovel: ImovelProps;
};

export const ImovelDetails = ({ imovel }: ImovelDetailsProps) => {
  return (
    <>
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight={"normal"}>
          Imovel {imovel?.name}
        </Heading>
        <NextLink passHref href={`/imovels/edit/${imovel?.id}`}>
          <Button
            size="sm"
            fontSize={"sm"}
            colorScheme="green"
            leftIcon={<Icon fontSize="20" as={RiAddLine} />}
          >
            Editar
          </Button>
        </NextLink>
      </Flex>
      <GenericDetailsItem
        item={imovel}
        fields={[
          { id: "name", label: "Nome" },
          { id: "createdById", label: "Id do criador" },
          { id: "created_at", label: "Data de criação" },
        ]}
      />
    </>
  );
};
