import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import InputText from "primevue/inputtext";
import MultiSelect from "primevue/multiselect";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(PrimeVue);

app.component("Button", Button);
app.component("Column", Column);
app.component("DataTable", DataTable);
app.component("InputText", InputText);
app.component("MultiSelect", MultiSelect);

app.mount("#app");
