import { SupabaseRepository } from "shared/libs/infra";
import { LoadImovel, loadImovel } from "./loadImovel";
import { ImovelRepository } from "../../repositories";

export const makeLoadImovelFactory = (): LoadImovel => {
  const repository = new ImovelRepository(new SupabaseRepository("imovel"));
  return loadImovel(repository);
};
