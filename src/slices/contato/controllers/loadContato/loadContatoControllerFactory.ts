import { Controller } from "shared/libs/infra";
import { makeLoadContatoFactory } from "../../useCases";
import { LoadContatoController } from "./loadContatoController";

export const makeLoadContatoController = (): Controller => {
  return new LoadContatoController(makeLoadContatoFactory());
};
/*
EXEMPLO DE USO
    const { data, error } = await makeLoadContatoController().handle({
      query: {
        fields: { id: 1 },
        options: { select: "tax" },
      },
    });
*/
