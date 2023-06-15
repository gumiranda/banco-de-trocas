import { ImovelProps } from "entidades/imovel";
import { useEditImovel } from "./editImovel.hook";
import { BoxCreateItem, FormControl, GenericDetailsItem, GridForm } from "shared/ui";

export interface EditImovelFormProps {
  imovel: ImovelProps;
}
export const EditImovelForm = ({ imovel }: EditImovelFormProps) => {
  const { formState, register, handleSubmit, handleEditImovel } = useEditImovel({
    imovel,
  });
  return (
    <BoxCreateItem
      onSubmit={handleSubmit(handleEditImovel)}
      title={"Editar imovel"}
      isLoadingSaveButton={formState.isSubmitting}
      cancelRoute={"/imovels/1"}
    >
      <GenericDetailsItem
        item={imovel}
        fields={[
          { id: "id", label: "Id" },
          { id: "name", label: "Nome" },
          { id: "createdById", label: "Id do criador" },
          { id: "created_at", label: "Data de criação" },
        ]}
      />
      <GridForm>
        <FormControl
          label="Nome do imovel"
          error={formState.errors.name}
          {...register("name")}
        />
      </GridForm>
    </BoxCreateItem>
  );
};
