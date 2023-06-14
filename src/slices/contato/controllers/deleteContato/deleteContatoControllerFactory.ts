import { Controller } from "shared/libs/infra";
import { makeDeleteContatoFactory } from "../../useCases";
import { DeleteContatoController } from "./deleteContatoController";

export const makeDeleteContatoController = (): Controller => {
  return new DeleteContatoController(makeDeleteContatoFactory());
};
/*
EXEMPLO DE USO
    const { data, error } = await makeLoadContatoController().handle({
      query: {
        fields: { id: 4 },
        options: {  },
      },
    });
*/
