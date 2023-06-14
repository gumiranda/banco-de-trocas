import { Controller, HttpRequest, HttpResponse, ok } from "shared/libs/infra";
import { DeleteContato } from "../../useCases";

export class DeleteContatoController extends Controller {
  constructor(private readonly deleteContato: DeleteContato) {
    super();
  }
  async execute(httpRequest: HttpRequest<any>): Promise<HttpResponse<any>> {
    const contatoDeleteed = await this.deleteContato(httpRequest?.query);
    return ok(contatoDeleteed);
  }
}
