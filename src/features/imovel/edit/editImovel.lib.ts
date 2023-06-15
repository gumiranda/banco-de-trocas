import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EditImovelFormProps } from "./EditImovelForm";
export type EditImovelFormData = {
  name: string;
};

export type SubmitEditImovelHandler = SubmitHandler<EditImovelFormData>;

export const editImovelFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
});

export const useEditImovelLib = (props: EditImovelFormProps) => {
  const { imovel: currentImovel } = props;
  const formProps = useForm<EditImovelFormData>({
    resolver: yupResolver(editImovelFormSchema),
    defaultValues: {
      name: currentImovel?.name ?? "",
    },
  });
  return { ...formProps };
};
