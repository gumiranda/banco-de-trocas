import { Query } from "@/shared/types";
import { HttpResponse } from "@/shared/libs/infra";

export interface LoadImovelRepository {
  loadImovel(query: Query): Promise<HttpResponse | null>;
}
