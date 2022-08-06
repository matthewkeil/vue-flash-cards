import "./registerServiceWorker";

import { createApp } from "vue";

import App from "./App.vue";
import { viewportPlugin } from "./plugins/viewport";
import { store, key } from "./store";
import router from "./router";
import "./main.css";

createApp(App).use(store, key).use(router).use(viewportPlugin).mount("#app");

if ("ethereum" in window) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).ethereum.autoRefreshOnNetworkChange = false;
}
