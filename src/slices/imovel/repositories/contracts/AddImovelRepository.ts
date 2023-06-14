import { HttpResponse } from "shared/libs/infra";
import { ImovelData } from "../../ImovelEntity";

export interface AddImovelRepository {
  addImovel(imovel: ImovelData): Promise<HttpResponse | null>;
}
