import { SupabaseRepository } from "shared/libs/infra";
import { AddContato, addContato } from "./addContato";
import { ContatoRepository } from "../../repositories";

export const makeAddContatoFactory = (): AddContato => {
  const repository = new ContatoRepository(new SupabaseRepository("contato"));
  return addContato(repository);
};
