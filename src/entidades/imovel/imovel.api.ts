import { ImovelProps, imovelModel } from "./imovel.model";
import {
  makeLoadImovelByPageController,
  makeLoadImovelController,
} from "slices/imovel/controllers";
export type GetImovelsResponse = {
  imovels: ImovelProps[];
  totalCount: number;
  next?: number;
  prev?: number;
};
const registerByPage = 10;
export const getImovels = async (
  page: number,
  ctx: any,
  params: any = {}
): Promise<GetImovelsResponse> => {
  const { data, error } = await makeLoadImovelByPageController().handle({
    query: {
      typeSort: "asc",
      sortBy: "name",
      page,
      projection: "*",
    },
  });
  const { imovels, total } = data || {};
  const totalCount = Number(total ?? 0);
  const lastPage = Number.isInteger(totalCount / registerByPage)
    ? totalCount / registerByPage
    : Math.floor(totalCount / registerByPage) + 1;
  const response = {
    imovels: imovels?.map?.((props: ImovelProps) => imovelModel(props).format()),
    totalCount,
  };
  if (lastPage > page) {
    Object.assign(response, { next: page + 1 });
  }
  if (page > 1) {
    Object.assign(response, { prev: page - 1 });
  }
  return response;
};
type InfiniteProps = {
  pageParam: number;
  ctx: any;
};
export const getInfiniteImovels = async ({
  pageParam = 1,
  ctx,
}: InfiniteProps): Promise<GetImovelsResponse> => {
  return getImovels(pageParam, ctx);
};
export const getImovelById = async (id: string, ctx: any): Promise<ImovelProps | null> => {
  try {
    const { data, error } = await makeLoadImovelController().handle({
      query: {
        fields: { id },
        options: { select: "*" },
      },
    });
    if (!data) {
      return null;
    }
    return imovelModel(data?.[0]).format();
  } catch (error) {
    return null;
  }
};
