import { Controller, HttpRequest, HttpResponse, ok } from "shared/libs/infra";
import { AddContato } from "../../useCases";

export class AddContatoController extends Controller {
  constructor(private readonly addContato: AddContato) {
    super();
  }
  async execute(httpRequest: HttpRequest<any>): Promise<HttpResponse<any>> {
    const contatoCreated = await this.addContato(httpRequest?.body);
    return ok(contatoCreated);
  }
}
