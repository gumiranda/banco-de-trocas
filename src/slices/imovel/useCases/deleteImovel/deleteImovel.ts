import { HttpResponse } from "shared/libs/infra";
import { Query } from "shared/types";
import { DeleteImovelRepository } from "../../repositories";

export type DeleteImovel = (query: Query) => Promise<HttpResponse | null>;
export type DeleteImovelSignature = (deleteImovel: DeleteImovelRepository) => DeleteImovel;
export const deleteImovel: DeleteImovelSignature =
  (deleteImovelRepository: DeleteImovelRepository) => (query: Query) => {
    return deleteImovelRepository.deleteImovel(query);
  };
