import { useState } from "react";
import { makeAddImovelController, makeLoadImovelController } from "./controllers";

export const useImovel = () => {
  const [imovelData, setImovelData] = useState(null);
  const [imovelError, setImovelError] = useState(null);
  const getImovel = async ({ fields = {}, options = {} }) => {
    const { data, error } = await makeLoadImovelController().handle({
      query: {
        fields,
        options,
      },
    });
    setImovelData(data);
    setImovelError(error);
    return { data, error };
  };
  const insertImovel = async ({ body = {} }) => {
    const { data, error } = await makeAddImovelController().handle({
      body,
    });
    return { data, error };
  };
  return {
    imovelData,
    setImovelData,
    getImovel,
    imovelError,
    setImovelError,
    insertImovel,
  };
};
