import { Controller, HttpRequest, HttpResponse, ok } from "@/shared/libs/infra";
import { LoadImovelByPage } from "../../useCases";

export class LoadImovelByPageController extends Controller {
  constructor(private readonly loadImovelByPage: LoadImovelByPage) {
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
    const imovelLoaded = await this.loadImovelByPage({
      fields,
      options,
    });
    return ok({
      data: {
        imovels: imovelLoaded?.imovels?.data,
        total: imovelLoaded?.total,
      },
      error: imovelLoaded?.imovels?.error,
    });
  }
}
