import { HttpResponse, Repository } from "@/shared/libs/infra";
import {
  AddImovelRepository,
  DeleteImovelRepository,
  LoadImovelByPageRepository,
  LoadImovelRepository,
  UpdateImovelRepository,
} from "./contracts";
import { Query } from "@/shared/types";
import { ImovelData, ImovelPaginated } from "../ImovelEntity";
export class ImovelRepository
  implements
    AddImovelRepository,
    DeleteImovelRepository,
    LoadImovelByPageRepository,
    LoadImovelRepository,
    UpdateImovelRepository
{
  constructor(private readonly repository: Repository) {}
  async addImovel(imovel: ImovelData): Promise<HttpResponse | null> {
    return this.repository.add(imovel);
  }
  async deleteImovel(query: Query): Promise<HttpResponse | null> {
    return this.repository.deleteOne(query);
  }
  async loadImovelByPage(query: Query): Promise<ImovelPaginated | null> {
    const imovels = await this.repository.getPaginate(
      query?.options?.page ?? 0,
      query?.fields ?? {},
      query?.options?.sort ?? "created_at",
      10,
      query?.options?.projection ?? {}
    );
    const total = await this.repository.getCount(query?.fields ?? {});
    return { imovels, total };
  }
  async loadImovel(query: Query): Promise<HttpResponse | null> {
    return this.repository.getAll(query ?? {});
  }
  async updateImovel(query: Query, data: ImovelData): Promise<HttpResponse | null> {
    return this.repository.update(query ?? {}, data);
  }
}
