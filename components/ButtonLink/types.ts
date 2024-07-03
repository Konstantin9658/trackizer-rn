import { ExpoRouter } from "expo-router/types/expo-router";
import { PressableProps } from "react-native";

export type VariantLink = "primary" | "secondary";

export interface ButtonLinkProps extends PressableProps {
  text: string;
  variant: VariantLink;
  route: ExpoRouter.Href;
}
