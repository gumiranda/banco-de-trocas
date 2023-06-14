import { HttpResponse, Repository } from "shared/libs/infra";
import {
  AddContatoRepository,
  DeleteContatoRepository,
  LoadContatoByPageRepository,
  LoadContatoRepository,
  UpdateContatoRepository,
} from "./contracts";
import { Query } from "shared/types";
import { ContatoData, ContatoPaginated } from "../ContatoEntity";
export class ContatoRepository
  implements
    AddContatoRepository,
    DeleteContatoRepository,
    LoadContatoByPageRepository,
    LoadContatoRepository,
    UpdateContatoRepository
{
  constructor(private readonly repository: Repository) {}
  async addContato(contato: ContatoData): Promise<HttpResponse | null> {
    return this.repository.add(contato);
  }
  async deleteContato(query: Query): Promise<HttpResponse | null> {
    return this.repository.deleteOne(query);
  }
  async loadContatoByPage(query: Query): Promise<ContatoPaginated | null> {
    const contatos = await this.repository.getPaginate(
      query?.options?.page ?? 0,
      query?.fields ?? {},
      query?.options?.sort ?? "created_at",
      10,
      query?.options?.projection ?? {}
    );
    const total = await this.repository.getCount(query?.fields ?? {});
    return { contatos, total };
  }
  async loadContato(query: Query): Promise<HttpResponse | null> {
    return this.repository.getAll(query ?? {});
  }
  async updateContato(query: Query, data: ContatoData): Promise<HttpResponse | null> {
    return this.repository.update(query ?? {}, data);
  }
}
