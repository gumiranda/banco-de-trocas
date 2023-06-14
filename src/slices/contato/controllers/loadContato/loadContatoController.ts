import { Controller, HttpRequest, HttpResponse, ok } from "shared/libs/infra";
import { LoadContato } from "../../useCases";

export class LoadContatoController extends Controller {
  constructor(private readonly loadContato: LoadContato) {
    super();
  }
  async execute(httpRequest: HttpRequest<any>): Promise<HttpResponse<any>> {
    const contatoLoaded = await this.loadContato(httpRequest?.query);
    return ok(contatoLoaded);
  }
}
