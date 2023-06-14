import { SupabaseRepository } from "shared/libs/infra";
import { DeleteContato, deleteContato } from "./deleteContato";
import { ContatoRepository } from "../../repositories/ContatoRepository";

export const makeDeleteContatoFactory = (): DeleteContato => {
  const repository = new ContatoRepository(new SupabaseRepository("contato"));
  return deleteContato(repository);
};
