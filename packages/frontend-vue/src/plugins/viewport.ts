import { Plugin, Ref, ref } from "vue";

export type Orientation = "portrait" | "landscape";
export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";
export interface ViewportPlugin {
  height: Ref<number>;
  width: Ref<number>;
  orientation: Ref<Orientation>;
  breakpoint: Ref<Breakpoint>;
}

export const viewportPlugin: Plugin = {
  install(app) {
    const height = ref<number>(window.screen.availHeight);
    const width = ref<number>(window.screen.availWidth);

    function currentBreakpoint() {
      if (window.screen.availWidth < 640) {
        return "sm";
      }
      if (window.screen.availWidth < 768) {
        return "md";
      }
      if (window.screen.availWidth < 1024) {
        return "lg";
      }
      if (window.screen.availWidth < 1280) {
        return "xl";
      }
      return "2xl";
    }
    const breakpoint = ref<Breakpoint>(currentBreakpoint());

    function currentOrientation() {
      return window.screen.availHeight > window.screen.availWidth
        ? "portrait"
        : "landscape";
    }
    const orientation = ref<Orientation>(currentOrientation());

    const resizeListener = () => {
      height.value = window.screen.availHeight;
      width.value = window.screen.availWidth;
      breakpoint.value = currentBreakpoint();
      orientation.value = currentOrientation();
    };
    window.addEventListener("resize", resizeListener);

    const removeListener = () => {
      window.removeEventListener("resize", resizeListener);
      window.removeEventListener("beforeunload", removeListener);
    };
    window.addEventListener("beforeunload", removeListener);

    const $viewport: ViewportPlugin = {
      height,
      width,
      orientation,
      breakpoint,
    };

    app.config.globalProperties.$viewport = $viewport;
  },
};
