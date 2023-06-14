import { AddContatoRepository } from "slices/contato/repositories";
import { HttpResponse } from "shared/libs/infra";
import { ContatoData, ContatoEntity } from "../../ContatoEntity";

export type AddContato = (data: ContatoData) => Promise<HttpResponse | null>;
export type AddContatoSignature = (addContato: AddContatoRepository) => AddContato;
export const addContato: AddContatoSignature =
  (addContatoRepository: AddContatoRepository) => (data: ContatoData) => {
    return addContatoRepository.addContato(new ContatoEntity(data));
  };
