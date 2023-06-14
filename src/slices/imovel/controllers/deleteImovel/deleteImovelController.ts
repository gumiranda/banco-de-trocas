import { Controller, HttpRequest, HttpResponse, ok } from "shared/libs/infra";
import { DeleteImovel } from "../../useCases";

export class DeleteImovelController extends Controller {
  constructor(private readonly deleteImovel: DeleteImovel) {
    super();
  }
  async execute(httpRequest: HttpRequest<any>): Promise<HttpResponse<any>> {
    const imovelDeleteed = await this.deleteImovel(httpRequest?.query);
    return ok(imovelDeleteed);
  }
}
