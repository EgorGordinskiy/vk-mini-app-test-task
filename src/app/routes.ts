import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from "@vkontakte/vk-mini-apps-router";
import { DEFAULT_ROOT, DEFAULT_VIEW, DEFAULT_VIEW_PANELS } from "shared/lib";

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, "/", []),
      createPanel(DEFAULT_VIEW_PANELS.FACT, `/${DEFAULT_VIEW_PANELS.FACT}`, []),
      createPanel(DEFAULT_VIEW_PANELS.AGE, `/${DEFAULT_VIEW_PANELS.AGE}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
