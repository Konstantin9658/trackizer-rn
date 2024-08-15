import { PressableProps } from "react-native";

export enum FilterValue {
  subs,
  upcoming,
}

export enum TabTitle {
  Subscriptions = "Your subscriptions",
  Upcoming = "Upcoming bills",
}

export interface TabProps extends PressableProps {
  title: TabTitle;
  isActive?: boolean;
}
