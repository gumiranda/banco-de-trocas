import { Query } from "shared/types";
import { ContatoPaginated } from "../../ContatoEntity";
import { LoadContatoByPageRepository } from "../../repositories";

export type LoadContatoByPage = (query: Query) => Promise<ContatoPaginated | null>;
export type LoadContatoByPageSignature = (
  loadContatoByPage: LoadContatoByPageRepository
) => LoadContatoByPage;
export const loadContatoByPage: LoadContatoByPageSignature =
  (loadContatoByPageRepository: LoadContatoByPageRepository) =>
  async (query: Query) => {
    return loadContatoByPageRepository.loadContatoByPage(query);
  };
