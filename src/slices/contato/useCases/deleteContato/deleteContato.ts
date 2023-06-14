import { HttpResponse } from "shared/libs/infra";
import { Query } from "shared/types";
import { DeleteContatoRepository } from "../../repositories";

export type DeleteContato = (query: Query) => Promise<HttpResponse | null>;
export type DeleteContatoSignature = (
  deleteContato: DeleteContatoRepository
) => DeleteContato;
export const deleteContato: DeleteContatoSignature =
  (deleteContatoRepository: DeleteContatoRepository) => (query: Query) => {
    return deleteContatoRepository.deleteContato(query);
  };
