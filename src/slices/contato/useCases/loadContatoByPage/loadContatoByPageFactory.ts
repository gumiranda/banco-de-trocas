import { SupabaseRepository } from "shared/libs/infra";
import { LoadContatoByPage, loadContatoByPage } from "./loadContatoByPage";
import { ContatoRepository } from "../../repositories";

export const makeLoadContatoByPageFactory = (): LoadContatoByPage => {
  const repository = new ContatoRepository(new SupabaseRepository("contato"));
  return loadContatoByPage(repository);
};
