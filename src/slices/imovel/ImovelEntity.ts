export type ImovelData = {
  id?: string;
  name: string;
  created_at?: Date;
  aceitatroca?: boolean | null;
  areatotal?: number | null;
  areautil?: number | null;
  distanciamar?: number | null;
  documentacao?: string | null;
  email?: string | null;
  endereco?: string | null;
  faixadepreco?: string | null;
  infoadicional?: string | null;
  interessadoem?: string | null;
  localizacao?: string | null;
  municipio?: string | null;
  numerobanheiros?: number | null;
  numeroquartos?: string | null;
  obsimovel?: string | null;
  photo?: string | null;
  telefone?: string | null;
  tipo?: string | null;
  tipodepropriedade?: string | null;
  trocaobs?: string | null;
  uf?: string | null;
  valordemercado?: number | null;
  valordevenda?: number | null;
};

export type ImovelPaginated = {
  imovels: { data: ImovelData[]; error: any };
  total: number;
};

export class ImovelEntity {
  name: string;
  created_at?: Date;
  aceitatroca?: boolean | null;
  areatotal?: number | null;
  areautil?: number | null;
  distanciamar?: number | null;
  documentacao?: string | null;
  email?: string | null;
  endereco?: string | null;
  faixadepreco?: string | null;
  infoadicional?: string | null;
  interessadoem?: string | null;
  localizacao?: string | null;
  municipio?: string | null;
  numerobanheiros?: number | null;
  numeroquartos?: string | null;
  obsimovel?: string | null;
  photo?: string | null;
  telefone?: string | null;
  tipo?: string | null;
  tipodepropriedade?: string | null;
  trocaobs?: string | null;
  uf?: string | null;
  valordemercado?: number | null;
  valordevenda?: number | null;
  constructor(data: ImovelData) {
    this.name = data.name;
    this.aceitatroca = data.aceitatroca;
    this.areatotal = data.areatotal;
    this.areautil = data.areautil;
    this.distanciamar = data.distanciamar;
    this.documentacao = data.documentacao;
    this.email = data.email;
    this.endereco = data.endereco;
    this.faixadepreco = data.faixadepreco;
    this.infoadicional = data.infoadicional;
    this.interessadoem = data.interessadoem;
    this.localizacao = data.localizacao;
    this.municipio = data.municipio;
    this.numerobanheiros = data.numerobanheiros;
    this.numeroquartos = data.numeroquartos;
    this.obsimovel = data.obsimovel;
    this.photo = data.photo;
    this.telefone = data.telefone;
    this.tipo = data.tipo;
    this.tipodepropriedade = data.tipodepropriedade;
    this.trocaobs = data.trocaobs;
    this.uf = data.uf;
    this.valordemercado = data.valordemercado;
    this.valordevenda = data.valordevenda;
    this.created_at = new Date();
  }
}
