import { SupabaseRepository } from "@/shared/libs/infra";
import { AddImovel, addImovel } from "./addImovel";
import { ImovelRepository } from "../../repositories";

export const makeAddImovelFactory = (): AddImovel => {
  const repository = new ImovelRepository(new SupabaseRepository("imovel"));
  return addImovel(repository);
};
