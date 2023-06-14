export type ImovelData = {
  id?: string;
  name: string;
  created_at?: Date;
};

export type ImovelPaginated = {
  imovels: { data: ImovelData[]; error: any };
  total: number;
};

export class ImovelEntity {
  name: string;
  created_at?: Date;
  constructor(data: ImovelData) {
    this.name = data.name;
    this.created_at = new Date();
  }
}
