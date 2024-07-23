import { ButtonProps } from "react-native";

export type VariantButton = "blue" | "dark" | "light" | "primary";

export interface CustomButtonProps extends ButtonProps {
  // text: string;
  variant: VariantButton;
}
