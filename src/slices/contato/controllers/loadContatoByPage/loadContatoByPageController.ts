import { Controller, HttpRequest, HttpResponse, ok } from "shared/libs/infra";
import { LoadContatoByPage } from "../../useCases";

export class LoadContatoByPageController extends Controller {
  constructor(private readonly loadContatoByPage: LoadContatoByPage) {
    super();
  }
  async execute(httpRequest: HttpRequest<any>): Promise<HttpResponse<any>> {
    const {
      projection,
      page,
      sortBy,
      typeSort = "asc",
      ...rest
    } = httpRequest?.query || {};
    const fields = rest;
    const options = { sort: sortBy, page, projection };
    const contatoLoaded = await this.loadContatoByPage({
      fields,
      options,
    });
    return ok({
      data: {
        contatos: contatoLoaded?.contatos?.data,
        total: contatoLoaded?.total,
      },
      error: contatoLoaded?.contatos?.error,
    });
  }
}
