import { Query } from "@/shared/types";
import { HttpResponse } from "@/shared/libs/infra";

export interface DeleteImovelRepository {
  deleteImovel(query: Query): Promise<HttpResponse | null>;
}
