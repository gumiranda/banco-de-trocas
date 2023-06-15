import { Controller, HttpRequest, HttpResponse, ok } from "shared/libs/infra";
import { UpdateContato } from "slices/contato/useCases";

export class UpdateContatoController extends Controller {
  constructor(private readonly updateContato: UpdateContato) {
    super();
  }
  async execute(httpRequest: HttpRequest<any>): Promise<HttpResponse<any>> {
    const contatoUpdated = await this.updateContato(httpRequest?.query, httpRequest?.body);
    return ok(contatoUpdated);
  }
}
