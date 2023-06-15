import { Query } from "shared/types";
import { HttpResponse } from "shared/libs/infra";
import { LoadContatoRepository } from "../../repositories";

export type LoadContato = (query: Query) => Promise<HttpResponse | null>;
export type LoadContatoSignature = (loadContato: LoadContatoRepository) => LoadContato;
export const loadContato: LoadContatoSignature =
  (loadContatoRepository: LoadContatoRepository) => async (query: Query) => {
    return loadContatoRepository.loadContato(query);
  };
