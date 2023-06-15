import { useState } from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { useUi } from "shared/libs";

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { makeAddContatoController } from "slices/contato/controllers";
export const ContactForm = () => {
  const { showModal } = useUi();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Container bg="gray.900" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="gray.800"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contato</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.200">
                    Preencha o formulário e entre em contato com o corretor
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #bdc3c7" }}
                        leftIcon={<MdPhone color="#bdc3c7" size="20px" />}
                      >
                        +55 (11) 991843119
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #bdc3c7" }}
                        leftIcon={<MdEmail color="#bdc3c7" size="20px" />}
                      >
                        giaguiar@uol.com.br
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #bdc3c7" }}
                        leftIcon={<MdLocationOn color="#bdc3c7" size="20px" />}
                      >
                        Ribeirão Preto, SP
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<FaInstagram size="28px" />}
                    />
                    <IconButton
                      aria-label="whatsapp"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<FaWhatsapp size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Seu nome</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input
                            type="text"
                            size="md"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Email</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input
                            type="email"
                            size="md"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mensagem</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          placeholder="Escreva aqui sua mensagem"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          onClick={async () => {
                            const { data, error } =
                              await makeAddContatoController().handle({
                                body: {
                                  email,
                                  nome: name,
                                  message,
                                },
                              });
                            if (data?.[0]) {
                              showModal({
                                content:
                                  "Contato enviado, em breve nosso corretor credenciado entrará em contato!",
                                title: "Sucesso",
                                type: "success",
                              });
                            }
                            console.log({ data, error });
                          }}
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Entrar em contato
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
