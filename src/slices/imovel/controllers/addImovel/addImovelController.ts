import { Controller, HttpRequest, HttpResponse, ok } from "shared/libs/infra";
import { AddImovel } from "../../useCases";

export class AddImovelController extends Controller {
  constructor(private readonly addImovel: AddImovel) {
    super();
  }
  async execute(httpRequest: HttpRequest<any>): Promise<HttpResponse<any>> {
    const imovelCreated = await this.addImovel(httpRequest?.body);
    return ok(imovelCreated);
  }
}
