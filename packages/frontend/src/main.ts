import "./registerServiceWorker";

import { createApp, h, provide } from "vue";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
// import { createApolloProvider } from "@vue/apollo-option";

import App from "./App.vue";
import { viewportPlugin } from "./plugins/viewport";
import { store, key } from "./store";
import router from "./router";
import "./main.css";

const PROD = process.env.NODE_ENV === "production";
const uri = process.env.GRAPHQL_URI ?? "http://localhost:4000/graphql";

const apolloClient = new ApolloClient({
  connectToDevTools: !PROD,
  cache: new InMemoryCache(),
  link: new HttpLink({ uri }),
});

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
})
  .use(store, key)
  .use(router)
  .use(viewportPlugin)
  .mount("#app");

if ("ethereum" in window) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).ethereum.autoRefreshOnNetworkChange = false;
}
