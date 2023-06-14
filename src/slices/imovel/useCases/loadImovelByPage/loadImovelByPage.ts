import { Query } from "shared/types";
import { ImovelPaginated } from "../../ImovelEntity";
import { LoadImovelByPageRepository } from "../../repositories";

export type LoadImovelByPage = (query: Query) => Promise<ImovelPaginated | null>;
export type LoadImovelByPageSignature = (
  loadImovelByPage: LoadImovelByPageRepository
) => LoadImovelByPage;
export const loadImovelByPage: LoadImovelByPageSignature =
  (loadImovelByPageRepository: LoadImovelByPageRepository) => async (query: Query) => {
    return loadImovelByPageRepository.loadImovelByPage(query);
  };
