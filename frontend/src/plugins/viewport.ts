import { Plugin } from "vue";

export interface ViewportPlugin {
  getOrientation: () => "portrait" | "landscape";
}

export const viewportPlugin: Plugin = {
  install(app) {
    const $viewport: ViewportPlugin = {
      getOrientation() {
        return "landscape";
      },
    };

    app.config.globalProperties.$viewport = $viewport;
  },
};
