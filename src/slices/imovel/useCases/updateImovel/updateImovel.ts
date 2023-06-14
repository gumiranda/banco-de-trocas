import { Query } from "shared/types";
import { HttpResponse } from "shared/libs/infra";
import { ImovelData } from "../../ImovelEntity";
import { UpdateImovelRepository } from "../../repositories";
export type UpdateImovel = (
  query: Query,
  data: ImovelData
) => Promise<HttpResponse | null>;
export type UpdateImovelSignature = (updateImovel: UpdateImovelRepository) => UpdateImovel;
export const updateImovel: UpdateImovelSignature =
  (updateImovelRepository: UpdateImovelRepository) =>
  async (query: Query, data: ImovelData) => {
    return updateImovelRepository.updateImovel(query, data);
  };
