export type ContatoData = {
  id?: string;
  created_at: string | null;
  email: string | null;
  interessadoem: string | null;
  nome: string | null;
  telefone: string | null;
};

export type ContatoPaginated = {
  contatos: { data: ContatoData[]; error: any };
  total: number;
};

export class ContatoEntity {
  created_at?: Date;
  email: string | null;
  interessadoem: string | null;
  nome: string | null;
  telefone: string | null;
  constructor(data: ContatoData) {
    this.nome = data.nome;
    this.email = data.email;
    this.telefone = data.telefone;
    this.interessadoem = data.interessadoem;
    this.created_at = new Date();
  }
}
