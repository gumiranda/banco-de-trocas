import { Query } from "shared/types";
import { HttpResponse } from "shared/libs/infra";
import { ContatoData } from "../../ContatoEntity";
import { UpdateContatoRepository } from "../../repositories";
export type UpdateContato = (
  query: Query,
  data: ContatoData
) => Promise<HttpResponse | null>;
export type UpdateContatoSignature = (
  updateContato: UpdateContatoRepository
) => UpdateContato;
export const updateContato: UpdateContatoSignature =
  (updateContatoRepository: UpdateContatoRepository) =>
  async (query: Query, data: ContatoData) => {
    return updateContatoRepository.updateContato(query, data);
  };
