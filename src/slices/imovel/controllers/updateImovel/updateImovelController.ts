import { Controller, HttpRequest, HttpResponse, ok } from "@/shared/libs/infra";
import { UpdateImovel } from "@/slices/imovel/useCases";

export class UpdateImovelController extends Controller {
  constructor(private readonly updateImovel: UpdateImovel) {
    super();
  }
  async execute(httpRequest: HttpRequest<any>): Promise<HttpResponse<any>> {
    const imovelUpdated = await this.updateImovel(
      httpRequest?.query,
      httpRequest?.body
    );
    return ok(imovelUpdated);
  }
}
