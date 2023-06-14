import { Query } from "shared/types";
import { HttpResponse } from "shared/libs/infra";

export interface DeleteContatoRepository {
  deleteContato(query: Query): Promise<HttpResponse | null>;
}
