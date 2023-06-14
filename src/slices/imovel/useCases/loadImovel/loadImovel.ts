import { Query } from "shared/types";
import { HttpResponse } from "shared/libs/infra";
import { LoadImovelRepository } from "../../repositories";

export type LoadImovel = (query: Query) => Promise<HttpResponse | null>;
export type LoadImovelSignature = (loadImovel: LoadImovelRepository) => LoadImovel;
export const loadImovel: LoadImovelSignature =
  (loadImovelRepository: LoadImovelRepository) => async (query: Query) => {
    return loadImovelRepository.loadImovel(query);
  };
