import { SupabaseRepository } from "shared/libs/infra";
import { UpdateContato, updateContato } from "./updateContato";
import { ContatoRepository } from "../../repositories";

export const makeUpdateContatoFactory = (): UpdateContato => {
  const repository = new ContatoRepository(new SupabaseRepository("contato"));
  return updateContato(repository);
};
