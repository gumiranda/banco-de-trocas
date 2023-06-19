import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export type CreateImovelFormData = {
  name: string;
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
  numeroquartos?: number | null;
  obsimovel?: string | null;
  telefone?: string | null;
  tipo?: string | null;
  tipodepropriedade?: string | null;
  trocaobs?: string | null;
  uf?: string | null;
  valordemercado?: number | null;
  valordevenda?: number | null;
  active?: boolean;
};

export type SubmitCreateImovelHandler = SubmitHandler<CreateImovelFormData>;

export const createImovelFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  municipio: yup.string(),
  endereco: yup.string(),
  numeroquartos: yup.number(),
  numerobanheiros: yup.number(),
  areatotal: yup.number(),
  areautil: yup.number(),
  valordemercado: yup.number(),
  valordevenda: yup.number(),
  faixadepreco: yup.string(),
  documentacao: yup.string(),
  tipo: yup.string(),
  distanciamar: yup.number(),
  trocaobs: yup.string(),
  obsimovel: yup.string(),
  infoadicional: yup.string(),
  telefone: yup.string().required("Telefone é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  localizacao: yup.string(),
});

export const useCreateImovelLib = () => {
  const formProps = useForm<CreateImovelFormData>({
    resolver: yupResolver(createImovelFormSchema),
    defaultValues: {
      name: "",
      municipio: "",
      endereco: "",
      numeroquartos: 0,
      numerobanheiros: 0,
      areatotal: 0,
      areautil: 0,
      valordemercado: 0,
      valordevenda: 0,
      faixadepreco: "",
      documentacao: "",
      tipo: "",
      distanciamar: 0,
      trocaobs: "",
      obsimovel: "",
      infoadicional: "",
      aceitatroca: false,
      telefone: "",
      email: "",
      localizacao: "",
    },
  });
  return { ...formProps };
};
