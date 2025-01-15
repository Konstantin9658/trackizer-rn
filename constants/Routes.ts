import { Href } from "expo-router";

interface IRoutes {
  [key: string]: Href;
}

export const Routes: IRoutes = {
  welcome: "/",
  quickStart: "/auth",
  signUp: "/auth/sign-up",
  login: "/auth/login",
  home: "/(tabs)/",
  newSubs: "/new-subs",
};
