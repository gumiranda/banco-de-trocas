import { ImovelProps } from "entidades/imovel";
import { useCreateImovel } from "./createImovel.hook";
import { BoxCreateItem, FormControl, Checkbox, GridForm, Select } from "shared/ui";
import { type } from "../../../entidades/imovel/index";

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
    faixadepreco,
    handleChangefaixadepreco,
    valordemercado,
    handleChangevalordemercado,
    valordevenda,
    handleChangevalordevenda,
    numeroquartos,
    handleChangenumeroquartos,
    numerobanheiros,
    handleChangenumerobanheiros,
  } = useCreateImovel();

  return (
    <BoxCreateItem
      onSubmit={handleSubmit(handleCreateImovel)}
      title={"Anunciar imóvel"}
      isLoadingSaveButton={formState.isSubmitting}
      cancelRoute={"/"}
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
          type="email"
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
            { key: "casa", value: "Casa geminada" },
            { key: "apartamento", value: "Apartamento" },
            { key: "apartamentocoberturaduplex", value: "Apartamento Cobertura Duplex" },
            { key: "apartamentoduplex", value: "Apartamento Duplex" },
            { key: "terreno", value: "Terreno" },
            { key: "chacara", value: "Chácara" },
            { key: "fazenda", value: "Fazenda" },
            { key: "galpao", value: "Galpão" },
            { key: "sala", value: "Sala" },
            { key: "loja", value: "Loja" },
            { key: "kitnet", value: "Kitnet" },
            { key: "outro", value: "Outro" },
          ]}
          value={tipodepropriedade}
          onChange={handleChangetipodepropriedade}
          keyValue="key"
          keyLabel="value"
        />
        <Select
          bg="gray.700"
          name="faixadepreco"
          label="Faixa de preço (em R$)"
          list={[
            { key: "entre55000e100000", value: "Entre R$ 55 mil e R$ 100 mil" },
            { key: "entre100000e200000", value: "Entre R$ 100 mil e R$ 200 mil" },
            { key: "entre200000e300000", value: "Entre R$ 200 mil e R$ 300 mil" },
            { key: "entre300000e400000", value: "Entre R$ 300 mil e R$ 400 mil" },
            { key: "entre400000e500000", value: "Entre R$ 400 mil e R$ 500 mil" },
            { key: "entre500000e600000", value: "Entre R$ 500 mil e R$ 600 mil" },
            { key: "entre600000e700000", value: "Entre R$ 600 mil e R$ 700 mil" },
            { key: "entre700000e800000", value: "Entre R$ 700 mil e R$ 800 mil" },
            { key: "entre800000e900000", value: "Entre R$ 800 mil e R$ 900 mil" },
            { key: "entre900000e1000000", value: "Entre R$ 900 mil e R$ 1 milhão" },
            { key: "entre1000000e2000000", value: "Entre R$ 1 milhão e R$ 2 milhões" },
            {
              key: "entre2000000e3000000",
              value: "Entre R$ 2 milhões e R$ 3 milhões",
            },
            {
              key: "entre3000000e4000000",
              value: "Entre R$ 3 milhões e R$ 4 milhões",
            },
            { key: "maisde4milhoes", value: "Mais de R$ 4 milhões" },
          ]}
          value={faixadepreco}
          onChange={handleChangefaixadepreco}
          keyValue="key"
          keyLabel="value"
        />
        {interessadoem !== "comprar" && (
          <>
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
            <Select
              bg="gray.700"
              name="numeroquartos"
              label="Número de quartos do imóvel"
              list={[
                { key: 1, value: "1" },
                { key: 2, value: "2" },
                { key: 3, value: "3" },
                { key: 4, value: "4" },
                { key: 5, value: "5" },
                { key: 6, value: "6" },
                { key: 7, value: "7" },
                { key: 8, value: "8" },
                { key: 9, value: "9" },
                { key: 10, value: "10" },
                { key: 11, value: "11" },
                { key: 12, value: "12" },
                { key: 13, value: "13" },
                { key: 14, value: "14" },
                { key: 15, value: "15" },
                { key: 16, value: "16" },
              ]}
              value={numeroquartos}
              onChange={handleChangenumeroquartos}
              keyValue="key"
              keyLabel="value"
            />
            <Select
              bg="gray.700"
              name="numerobanheiros"
              label="Número de banheiros do imóvel"
              list={[
                { key: 1, value: "1" },
                { key: 2, value: "2" },
                { key: 3, value: "3" },
                { key: 4, value: "4" },
                { key: 5, value: "5" },
                { key: 6, value: "6" },
                { key: 7, value: "7" },
                { key: 8, value: "8" },
                { key: 9, value: "9" },
                { key: 10, value: "10" },
                { key: 11, value: "11" },
                { key: 12, value: "12" },
                { key: 13, value: "13" },
                { key: 14, value: "14" },
                { key: 15, value: "15" },
                { key: 16, value: "16" },
              ]}
              value={numerobanheiros}
              onChange={handleChangenumerobanheiros}
              keyValue="key"
              keyLabel="value"
            />
            {/* <FormControl
              label="Distância do mar (caso houver)"
              error={formState.errors.distanciamar}
              {...register("distanciamar")}
            /> */}
            <FormControl
              label="Documentação do imóvel"
              error={formState.errors.documentacao}
              {...register("documentacao")}
            />
            <Select
              bg="gray.700"
              name="valordemercado"
              label="Valor de mercado do imóvel"
              list={[
                { key: "entre55000e100000", value: "Entre R$ 55 mil e R$ 100 mil" },
                { key: "entre100000e200000", value: "Entre R$ 100 mil e R$ 200 mil" },
                { key: "entre200000e300000", value: "Entre R$ 200 mil e R$ 300 mil" },
                { key: "entre300000e400000", value: "Entre R$ 300 mil e R$ 400 mil" },
                { key: "entre400000e500000", value: "Entre R$ 400 mil e R$ 500 mil" },
                { key: "entre500000e600000", value: "Entre R$ 500 mil e R$ 600 mil" },
                { key: "entre600000e700000", value: "Entre R$ 600 mil e R$ 700 mil" },
                { key: "entre700000e800000", value: "Entre R$ 700 mil e R$ 800 mil" },
                { key: "entre800000e900000", value: "Entre R$ 800 mil e R$ 900 mil" },
                { key: "entre900000e1000000", value: "Entre R$ 900 mil e R$ 1 milhão" },
                { key: "entre1000000e2000000", value: "Entre R$ 1 milhão e R$ 2 milhões" },
                {
                  key: "entre2000000e3000000",
                  value: "Entre R$ 2 milhões e R$ 3 milhões",
                },
                {
                  key: "entre3000000e4000000",
                  value: "Entre R$ 3 milhões e R$ 4 milhões",
                },
                { key: "maisde4milhoes", value: "Mais de R$ 4 milhões" },
              ]}
              value={valordemercado}
              onChange={handleChangevalordemercado}
              keyValue="key"
              keyLabel="value"
            />
            <Select
              bg="gray.700"
              name="valordevenda"
              label="Valor de venda do imóvel"
              list={[
                { key: "entre55000e100000", value: "Entre R$ 55 mil e R$ 100 mil" },
                { key: "entre100000e200000", value: "Entre R$ 100 mil e R$ 200 mil" },
                { key: "entre200000e300000", value: "Entre R$ 200 mil e R$ 300 mil" },
                { key: "entre300000e400000", value: "Entre R$ 300 mil e R$ 400 mil" },
                { key: "entre400000e500000", value: "Entre R$ 400 mil e R$ 500 mil" },
                { key: "entre500000e600000", value: "Entre R$ 500 mil e R$ 600 mil" },
                { key: "entre600000e700000", value: "Entre R$ 600 mil e R$ 700 mil" },
                { key: "entre700000e800000", value: "Entre R$ 700 mil e R$ 800 mil" },
                { key: "entre800000e900000", value: "Entre R$ 800 mil e R$ 900 mil" },
                { key: "entre900000e1000000", value: "Entre R$ 900 mil e R$ 1 milhão" },
                { key: "entre1000000e2000000", value: "Entre R$ 1 milhão e R$ 2 milhões" },
                {
                  key: "entre2000000e3000000",
                  value: "Entre R$ 2 milhões e R$ 3 milhões",
                },
                {
                  key: "entre3000000e4000000",
                  value: "Entre R$ 3 milhões e R$ 4 milhões",
                },
                { key: "maisde4milhoes", value: "Mais de R$ 4 milhões" },
              ]}
              value={valordevenda}
              onChange={handleChangevalordevenda}
              keyValue="key"
              keyLabel="value"
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
