export type ImovelProps = {
  id?: string | null;
  name?: string | null;
  created_at: string;
  value?: boolean;
  active?: boolean;
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

class Imovel {
  protected props: ImovelProps;
  constructor(props: ImovelProps) {
    this.props = props;
  }
  public static build(props: ImovelProps) {
    return new Imovel(props);
  }
  get id(): string | undefined | null {
    return this.props.id;
  }
  get name(): string | null | undefined {
    return this.props.name;
  }
  get created_at(): string {
    return this.props.created_at;
  }
  get active(): boolean | undefined {
    return this.props.active;
  }
  format(): ImovelProps {
    return {
      ...this.props,
      active: this.props.active || false,
      value: false,
      created_at: new Date(this.props.created_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      /*
      .toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      */
    };
  }
}
export const imovelModel = (props: ImovelProps) => Imovel.build(props);
