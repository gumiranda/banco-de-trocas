import { Controller } from "shared/libs/infra";
import { UpdateImovelController } from "./updateImovelController";
import { makeUpdateImovelFactory } from "slices/imovel/useCases";

export const makeUpdateImovelController = (): Controller => {
  return new UpdateImovelController(makeUpdateImovelFactory());
};
/*
EXEMPLO DE USO
    const { data, error } = await makeUpdateImovelController().handle({
      query: {
        fields: { id: 1 },
        options: { select: "tax" },
      },
      body: {
        name: "test",
      },
    });
*/
