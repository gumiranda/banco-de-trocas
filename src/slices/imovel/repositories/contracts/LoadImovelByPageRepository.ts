import { Query } from "shared/types";
import { ImovelPaginated } from "../../ImovelEntity";

export interface LoadImovelByPageRepository {
  loadImovelByPage(query: Query): Promise<ImovelPaginated | null>;
}
