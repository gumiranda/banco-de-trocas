import { ImovelProps } from "entidades/imovel";
import { useCreateImovel } from "./createImovel.hook";
import { BoxCreateItem, FormControl, Checkbox, GridForm } from "shared/ui";

export const CreateImovelForm = () => {
  const {
    aceitatroca,
    setAceitaTroca,
    formState,
    register,
    handleSubmit,
    handleCreateImovel,
  } = useCreateImovel();

  return (
    <BoxCreateItem
      onSubmit={handleSubmit(handleCreateImovel)}
      title={"Anunciar imóvel"}
      isLoadingSaveButton={formState.isSubmitting}
      cancelRoute={"/imovels/1"}
    >
      <GridForm>
        <FormControl
          label="Nome completo"
          error={formState.errors.name}
          {...register("name")}
        />
        <FormControl
          label="E-mail para contato"
          error={formState.errors.email}
          {...register("email")}
        />
        <FormControl
          label="Telefone para contato"
          error={formState.errors.telefone}
          {...register("telefone")}
        />
        <FormControl
          label="Interesse em (comprar,vender,trocar)"
          error={formState.errors.interessadoem}
          {...register("interessadoem")}
        />
        <FormControl
          label="Localização"
          error={formState.errors.localizacao}
          {...register("localizacao")}
        />
        <FormControl
          label="Tipo de propriedade (Casa,Apartamento,etc)"
          error={formState.errors.tipodepropriedade}
          {...register("tipodepropriedade")}
        />
        <FormControl
          label="Faixa de preço (em R$)"
          error={formState.errors.faixadepreco}
          {...register("faixadepreco")}
        />
        <FormControl
          label="Area total (em m2)"
          error={formState.errors.areatotal}
          {...register("areatotal")}
        />
        <FormControl
          label="Area util (em m2)"
          error={formState.errors.areautil}
          {...register("areautil")}
        />
        <FormControl
          label="Endereço do imóvel"
          error={formState.errors.endereco}
          {...register("endereco")}
        />
        <FormControl
          label="Município do imóvel"
          error={formState.errors.municipio}
          {...register("municipio")}
        />
        <FormControl
          label="Estado(UF) do imóvel"
          error={formState.errors.uf}
          {...register("uf")}
        />
        <FormControl
          label="Tipo do imóvel (casa,apartamento,etc)"
          error={formState.errors.tipo}
          {...register("tipo")}
        />
        <FormControl
          label="Número de quartos do imóvel"
          error={formState.errors.numeroquartos}
          {...register("numeroquartos")}
        />
        <FormControl
          label="Número de banheiros do imóvel"
          error={formState.errors.numerobanheiros}
          {...register("numerobanheiros")}
        />
        <FormControl
          label="Distância do mar (caso houver)"
          error={formState.errors.distanciamar}
          {...register("distanciamar")}
        />
        <FormControl
          label="Documentação do imóvel"
          error={formState.errors.documentacao}
          {...register("documentacao")}
        />
        <FormControl
          label="Valor de mercado do imóvel"
          error={formState.errors.valordemercado}
          {...register("valordemercado")}
        />
        <FormControl
          label="Valor de venda do imóvel"
          error={formState.errors.valordevenda}
          {...register("valordevenda")}
        />

        <Checkbox
          label="Aceita troca?"
          colorScheme="green"
          isChecked={aceitatroca}
          onChange={(e) => {
            e.preventDefault();
            setAceitaTroca(e.target.checked);
          }}
        />
        <FormControl
          label="Obs de troca do imóvel"
          error={formState.errors.trocaobs}
          {...register("trocaobs")}
        />
        <FormControl
          label="Obs do imóvel"
          error={formState.errors.obsimovel}
          {...register("obsimovel")}
        />
      </GridForm>
    </BoxCreateItem>
  );
};
