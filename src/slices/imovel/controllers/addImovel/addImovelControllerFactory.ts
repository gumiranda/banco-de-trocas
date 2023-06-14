import { Controller } from "shared/libs/infra";
import { makeAddImovelFactory } from "../../useCases";
import { AddImovelController } from "./addImovelController";

export const makeAddImovelController = (): Controller => {
  return new AddImovelController(makeAddImovelFactory());
};
/*
EXEMPLO DE USO
    const { data, error } = await makeAddImovelController().handle({
      body: {
        name: "test",
      },
    });
*/
