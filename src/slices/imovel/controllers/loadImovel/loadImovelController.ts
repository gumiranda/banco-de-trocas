import { Controller, HttpRequest, HttpResponse, ok } from "shared/libs/infra";
import { LoadImovel } from "../../useCases";

export class LoadImovelController extends Controller {
  constructor(private readonly loadImovel: LoadImovel) {
    super();
  }
  async execute(httpRequest: HttpRequest<any>): Promise<HttpResponse<any>> {
    const imovelLoaded = await this.loadImovel(httpRequest?.query);
    return ok(imovelLoaded);
  }
}
