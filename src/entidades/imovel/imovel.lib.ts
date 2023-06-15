import { getImovels, getInfiniteImovels } from "./imovel.api";
import {
  useQuery,
  UseQueryOptions,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
export const useGetImovels = (page: number, options?: UseQueryOptions, ctx?: any): any => {
  return useQuery(["imovels", page], () => getImovels(page, ctx), {
    staleTime: 1000 * 5,
    ...options,
  } as any);
};
export const useGetInfiniteImovels = (options?: UseInfiniteQueryOptions) => {
  return useInfiniteQuery(["imovelsInfinite"], getInfiniteImovels as any, options as any);
};
