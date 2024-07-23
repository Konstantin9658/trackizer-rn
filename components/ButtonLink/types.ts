import { ExpoRouter } from "expo-router/types/expo-router";

export type VariantButton = "primary" | "secondary";

export interface ButtonLinkProps {
  text: string;
  variant: VariantButton;
  route: ExpoRouter.Href;
}
