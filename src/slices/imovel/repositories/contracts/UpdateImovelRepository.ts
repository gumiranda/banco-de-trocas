import { Query } from "@/shared/types";
import { HttpResponse } from "@/shared/libs/infra";
import { ImovelData } from "../../ImovelEntity";

export interface UpdateImovelRepository {
  updateImovel(query: Query, data: ImovelData): Promise<HttpResponse | null>;
}
