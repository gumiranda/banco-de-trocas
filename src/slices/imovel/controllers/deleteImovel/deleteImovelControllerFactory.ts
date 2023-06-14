import { Controller } from "shared/libs/infra";
import { makeDeleteImovelFactory } from "../../useCases";
import { DeleteImovelController } from "./deleteImovelController";

export const makeDeleteImovelController = (): Controller => {
  return new DeleteImovelController(makeDeleteImovelFactory());
};
/*
EXEMPLO DE USO
    const { data, error } = await makeLoadImovelController().handle({
      query: {
        fields: { id: 4 },
        options: {  },
      },
    });
*/
