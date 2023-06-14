import { Controller } from "shared/libs/infra";
import { makeLoadImovelFactory } from "../../useCases";
import { LoadImovelController } from "./loadImovelController";

export const makeLoadImovelController = (): Controller => {
  return new LoadImovelController(makeLoadImovelFactory());
};
/*
EXEMPLO DE USO
    const { data, error } = await makeLoadImovelController().handle({
      query: {
        fields: { id: 1 },
        options: { select: "tax" },
      },
    });
*/
