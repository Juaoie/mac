import { createApp } from "vue";
import Logs from "./Index.vue";
import "@a/css/df.css";
import { store, key } from "@/store";
const app = createApp(Logs);

app.use(store, key);

app.mount("#app");
