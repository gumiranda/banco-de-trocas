import { Query } from "shared/types";
import { HttpResponse } from "shared/libs/infra";

export interface LoadContatoRepository {
  loadContato(query: Query): Promise<HttpResponse | null>;
}
