<template>
  <div>
    <DataTable
      :value="data"
      :paginator="true"
      :rows="10"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[10, 20, 50]"
      responsiveLayout="scroll"
      currentPageReportTemplate="Mostrando {first} até {last} de {totalRecords}"
    >
      <template #header>
        <div style="display: flex">
          <MultiSelect
            :modelValue="selectedColumns"
            :options="columns"
            optionLabel="header"
            @update:modelValue="onToggle"
            placeholder="Select Columns"
            style="width: 20em"
          />
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText type="text" v-model="input" />
          </span>
          <Button @click="search">Buscar</Button>
        </div>
      </template>
      <Column
        v-for="(col, index) of selectedColumns"
        :field="col.field"
        :header="col.header"
        :key="col.field + '_' + index"
        :sortable="true"
      ></Column>
    </DataTable>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import api from "../config/api";

export default defineComponent({
  name: "SearchBar",

  setup: () => {
    const data = ref([]);
    const input = ref("");
    const columns = ref([
      { field: "registro_ans", header: "Registro ANS" },
      { field: "cnpj", header: "CNPJ" },
      { field: "razao_social", header: "Razão Social" },
      { field: "nome_fantasia", header: "Nome Fantasia" },
      { field: "modalidade", header: "Modalidade" },
      { field: "logradouro", header: "Logradouro" },
      { field: "numero", header: "Número" },
      { field: "complemento", header: "Complemento" },
      { field: "bairro", header: "Bairro" },
      { field: "cidade", header: "Cidade" },
      { field: "uf", header: "UF" },
      { field: "cep", header: "CEP" },
      { field: "ddd", header: "DDD" },
      { field: "telefone", header: "Telefone" },
      { field: "fax", header: "Fax" },
      { field: "endereco_eletronico", header: "E-mail" },
      { field: "representante", header: "Representante" },
      { field: "cargo_representante", header: "Cargo Representante" },
      { field: "data_registro_ans", header: "Data Registro ANS" },
    ]);
    const selectedColumns = ref([
      columns.value[0],
      columns.value[1],
      columns.value[2],
      columns.value[9],
      columns.value[10],
    ]);

    const search = async () => {
      const res = await api.get(`v1?string=${input.value}`);
      data.value = res.data;
    };

    const onToggle = (val) => {
      selectedColumns.value = columns.value.filter((col) => val.includes(col));
    };

    return { columns, selectedColumns, input, data, search, onToggle };
  },
});
</script>
