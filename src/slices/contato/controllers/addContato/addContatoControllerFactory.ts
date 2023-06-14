import { Controller } from "shared/libs/infra";
import { makeAddContatoFactory } from "../../useCases";
import { AddContatoController } from "./addContatoController";

export const makeAddContatoController = (): Controller => {
  return new AddContatoController(makeAddContatoFactory());
};
/*
EXEMPLO DE USO
    const { data, error } = await makeAddContatoController().handle({
      body: {
        name: "test",
      },
    });
*/
