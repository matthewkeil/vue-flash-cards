import { ViewportPlugin } from "./plugins/viewport";
import { Store } from "./store";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $viewport: ViewportPlugin;
    $store: Store;
  }
}
