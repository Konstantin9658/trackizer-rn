import { router } from "expo-router";
import { ExpoRouter } from "expo-router/types/expo-router";

export const handleNavigate = (to: ExpoRouter.Href) => () => {
  router.push(to);
};
