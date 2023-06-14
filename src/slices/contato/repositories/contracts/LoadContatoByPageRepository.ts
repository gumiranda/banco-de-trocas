import { Query } from "shared/types";
import { ContatoPaginated } from "../../ContatoEntity";

export interface LoadContatoByPageRepository {
  loadContatoByPage(query: Query): Promise<ContatoPaginated | null>;
}
