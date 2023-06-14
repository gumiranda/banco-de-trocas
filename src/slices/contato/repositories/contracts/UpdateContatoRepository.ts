import { Query } from "shared/types";
import { HttpResponse } from "shared/libs/infra";
import { ContatoData } from "../../ContatoEntity";

export interface UpdateContatoRepository {
  updateContato(query: Query, data: ContatoData): Promise<HttpResponse | null>;
}
