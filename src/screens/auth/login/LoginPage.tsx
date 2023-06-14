import Router from "next/router";
import type { NextPage } from "next";
import { Head, Flex } from "shared/ui";
import { useAuth } from "shared/libs";
import { useEffect } from "react";
import { LoginForm } from "features/auth/login";
export const Login: NextPage = () => {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/");
    }
  }, [isAuthenticated]);
  return (
    <>
      <Head
        title="Banco de Trocas | Login"
        description="Página de login do painel Admin do Belezix"
      />
      <Flex minW="100%" justifyContent="center">
        {!isAuthenticated && (
          <Flex mt="15%">
            <LoginForm />
          </Flex>
        )}
      </Flex>
    </>
  );
};
