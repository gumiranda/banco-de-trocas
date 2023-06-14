import { SupabaseRepository } from "@/shared/libs/infra";
import { UpdateImovel, updateImovel } from "./updateImovel";
import { ImovelRepository } from "../../repositories";

export const makeUpdateImovelFactory = (): UpdateImovel => {
  const repository = new ImovelRepository(new SupabaseRepository("imovel"));
  return updateImovel(repository);
};
