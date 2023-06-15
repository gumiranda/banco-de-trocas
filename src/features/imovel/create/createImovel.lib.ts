import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export type CreateImovelFormData = {
  name: string;
  active?: boolean;
};

export type SubmitCreateImovelHandler = SubmitHandler<CreateImovelFormData>;

export const createImovelFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
});

export const useCreateImovelLib = () => {
  const formProps = useForm<CreateImovelFormData>({
    resolver: yupResolver(createImovelFormSchema),
    defaultValues: {
      name: "",
    },
  });
  return { ...formProps };
};
