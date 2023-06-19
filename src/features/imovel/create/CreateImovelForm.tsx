import { ImovelProps } from "entidades/imovel";
import { useCreateImovel } from "./createImovel.hook";
import { BoxCreateItem, FormControl, Checkbox, GridForm, Select } from "shared/ui";

export const CreateImovelForm = () => {
  const {
    aceitatroca,
    setAceitaTroca,
    formState,
    register,
    handleSubmit,
    handleCreateImovel,
    interessadoem,
    handleChangeInteressadoEm,
    tipodepropriedade,
    handleChangetipodepropriedade,
    uf,
    handleChangeuf,
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
        <Select
          bg="gray.700"
          name="interesseEm"
          label="Interesse em"
          list={[
            { key: "comprar", value: "Comprar" },
            { key: "trocar", value: "Trocar" },
            { key: "vender", value: "Vender" },
          ]}
          value={interessadoem}
          onChange={handleChangeInteressadoEm}
          keyValue="key"
          keyLabel="value"
        />
        <Select
          bg="gray.700"
          name="tipoDePropriedade"
          label="Tipo de imóvel"
          list={[
            { key: "casa", value: "Casa" },
            { key: "apartamento", value: "Apartamento" },
            { key: "terreno", value: "Terreno" },
            { key: "outro", value: "Outro" },
          ]}
          value={tipodepropriedade}
          onChange={handleChangetipodepropriedade}
          keyValue="key"
          keyLabel="value"
        />
        {interessadoem !== "comprar" && (
          <>
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

            <Select
              bg="gray.700"
              name="uf"
              label="Estado(UF) do imóvel"
              list={[
                { key: "SP", value: "São Paulo" },
                { key: "AM", value: "Amazonas" },
                { key: "AL", value: "Alagoas" },
                { key: "AC", value: "Acre" },
                { key: "AP", value: "Amapá" },
                { key: "BA", value: "Bahia" },
                { key: "PA", value: "Pará" },
                { key: "MT", value: "Mato Grosso" },
                { key: "MG", value: "Minas Gerais" },
                { key: "MS", value: "Mato Grosso do Sul" },
                { key: "MA", value: "Maranhão" },
                { key: "RS", value: "Rio Grande do Sul" },
                { key: "GO", value: "Goiás" },
                { key: "TO", value: "Tocantins" },
                { key: "PI", value: "Piauí" },
                { key: "RO", value: "Rondônia" },
                { key: "RR", value: "Roraima" },
                { key: "PR", value: "Paraná" },
                { key: "CE", value: "Ceará" },
                { key: "PE", value: "Pernambuco" },
                { key: "RN", value: "Rio Grande do Norte" },
                { key: "PB", value: "Paraíba" },
                { key: "SE", value: "Sergipe" },
                { key: "ES", value: "Espírito Santo" },
                { key: "RJ", value: "Rio de Janeiro" },
                { key: "DF", value: "Distrito Federal" },
              ]}
              value={uf}
              onChange={handleChangeuf}
              keyValue="key"
              keyLabel="value"
            />
            <FormControl
              label="Município do imóvel"
              error={formState.errors.municipio}
              {...register("municipio")}
            />
            <FormControl
              label="Endereço do imóvel"
              error={formState.errors.endereco}
              {...register("endereco")}
            />
            <FormControl
              label="Localização"
              error={formState.errors.localizacao}
              {...register("localizacao")}
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
            <FormControl
              label="Obs do imóvel"
              error={formState.errors.obsimovel}
              {...register("obsimovel")}
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
            {aceitatroca && (
              <FormControl
                label="Obs de troca do imóvel"
                error={formState.errors.trocaobs}
                {...register("trocaobs")}
              />
            )}
          </>
        )}
      </GridForm>
    </BoxCreateItem>
  );
};
