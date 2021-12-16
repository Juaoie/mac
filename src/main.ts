import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import "@a/css/df.css";
import {} from "@t/rxjs";

const app = createApp(App);

app.use(router);

app.mount("#app");
