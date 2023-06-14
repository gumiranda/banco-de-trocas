import { HttpResponse } from "shared/libs/infra";
import { ContatoData } from "../../ContatoEntity";

export interface AddContatoRepository {
  addContato(contato: ContatoData): Promise<HttpResponse | null>;
}
