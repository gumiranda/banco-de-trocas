import { Controller } from "shared/libs/infra";
import { UpdateContatoController } from "./updateContatoController";
import { makeUpdateContatoFactory } from "slices/contato/useCases";

export const makeUpdateContatoController = (): Controller => {
  return new UpdateContatoController(makeUpdateContatoFactory());
};
/*
EXEMPLO DE USO
    const { data, error } = await makeUpdateContatoController().handle({
      query: {
        fields: { id: 1 },
        options: { select: "tax" },
      },
      body: {
        name: "test",
      },
    });
*/
