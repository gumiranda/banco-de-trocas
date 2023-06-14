import { Controller } from "shared/libs/infra";
import { LoadImovelByPageController } from "./loadImovelByPageController";
import { makeLoadImovelByPageFactory } from "../../useCases";

export const makeLoadImovelByPageController = (): Controller => {
  return new LoadImovelByPageController(makeLoadImovelByPageFactory());
};
/*
EXEMPLO DE USO
    const { data, error } = await makeLoadImovelByPageController().handle({
      query: {
        typeSort: "asc",
        sortBy: "name",
        page: 1,
        projection: "*",
      },
    });
*/
