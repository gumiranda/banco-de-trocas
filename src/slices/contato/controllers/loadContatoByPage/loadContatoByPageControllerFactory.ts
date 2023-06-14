import { Controller } from "shared/libs/infra";
import { LoadContatoByPageController } from "./loadContatoByPageController";
import { makeLoadContatoByPageFactory } from "../../useCases";

export const makeLoadContatoByPageController = (): Controller => {
  return new LoadContatoByPageController(makeLoadContatoByPageFactory());
};
/*
EXEMPLO DE USO
    const { data, error } = await makeLoadContatoByPageController().handle({
      query: {
        typeSort: "asc",
        sortBy: "name",
        page: 1,
        projection: "*",
      },
    });
*/
