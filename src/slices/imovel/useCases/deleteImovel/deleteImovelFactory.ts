import { SupabaseRepository } from "shared/libs/infra";
import { DeleteImovel, deleteImovel } from "./deleteImovel";
import { ImovelRepository } from "../../repositories/ImovelRepository";

export const makeDeleteImovelFactory = (): DeleteImovel => {
  const repository = new ImovelRepository(new SupabaseRepository("imovel"));
  return deleteImovel(repository);
};
