import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store, key } from "./store";
import "./main.css";
import { viewportPlugin } from "./plugins/viewport";

createApp(App).use(store, key).use(router).use(viewportPlugin).mount("#app");
