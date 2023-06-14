import { supabase } from "shared/api/supabase";

export const signInWithPassword = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error, message: getMessage(error, "Erro ao fazer login") };
};
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error, message: getMessage(error, "Erro ao fazer o cadastro") };
};
export const forgotPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  return {
    data,
    error,
    message: getMessage(error, "Erro ao solicitar esquecimento de senha"),
  };
};
export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  return {
    error,
    message: getMessage(error, "Erro ao sair do app"),
  };
};
export const getMessage = (error: any, defaultMessage: string) => {
  switch (error?.message) {
    case "Email not confirmed":
      return "Por favor confirme seu email";
    case "Invalid login credentials":
      return "E-mail ou senha inválidos";
    default:
      return defaultMessage;
  }
};
