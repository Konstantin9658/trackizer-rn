import { Href, router } from "expo-router";

export const navigateTo = (to: Href) => () => {
  router.push(to);
};
