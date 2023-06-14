import { useState } from "react";
import { makeAddContatoController, makeLoadContatoController } from "./controllers";

export const useContato = () => {
  const [contatoData, setContatoData] = useState(null);
  const [contatoError, setContatoError] = useState(null);
  const getContato = async ({ fields = {}, options = {} }) => {
    const { data, error } = await makeLoadContatoController().handle({
      query: {
        fields,
        options,
      },
    });
    setContatoData(data);
    setContatoError(error);
    return { data, error };
  };
  const insertContato = async ({ body = {} }) => {
    const { data, error } = await makeAddContatoController().handle({
      body,
    });
    return { data, error };
  };
  return {
    contatoData,
    setContatoData,
    getContato,
    contatoError,
    setContatoError,
    insertContato,
  };
};
