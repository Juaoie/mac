import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import "@a/css/df.css";
import AppWindow from "./pages/AppWindow/index";

const app = createApp(App);

app.use(router);

app.component("app-window", AppWindow);
app.mount("#app");
