import { router } from "expo-router";
import { ExpoRouter } from "expo-router/types/expo-router";

export const navigateTo = (to: ExpoRouter.Href) => () => {
  router.push(to);
};
