import { SupabaseRepository } from "shared/libs/infra";
import { LoadContato, loadContato } from "./loadContato";
import { ContatoRepository } from "../../repositories";

export const makeLoadContatoFactory = (): LoadContato => {
  const repository = new ContatoRepository(new SupabaseRepository("contato"));
  return loadContato(repository);
};
