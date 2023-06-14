import { AddImovelRepository } from "@/slices/imovel/repositories";
import { HttpResponse } from "@/shared/libs/infra";
import { ImovelData, ImovelEntity } from "../../ImovelEntity";

export type AddImovel = (data: ImovelData) => Promise<HttpResponse | null>;
export type AddImovelSignature = (addImovel: AddImovelRepository) => AddImovel;
export const addImovel: AddImovelSignature =
  (addImovelRepository: AddImovelRepository) => (data: ImovelData) => {
    return addImovelRepository.addImovel(new ImovelEntity(data));
  };
