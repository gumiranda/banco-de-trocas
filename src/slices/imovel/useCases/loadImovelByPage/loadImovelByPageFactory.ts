import { SupabaseRepository } from "@/shared/libs/infra";
import { LoadImovelByPage, loadImovelByPage } from "./loadImovelByPage";
import { ImovelRepository } from "../../repositories";

export const makeLoadImovelByPageFactory = (): LoadImovelByPage => {
  const repository = new ImovelRepository(new SupabaseRepository("imovel"));
  return loadImovelByPage(repository);
};
