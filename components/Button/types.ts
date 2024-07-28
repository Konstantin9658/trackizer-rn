import { ReactNode } from "react";
import { PressableProps } from "react-native";

export type VariantButton = "blue" | "dark" | "light" | "primary";

export interface CustomButtonProps extends PressableProps {
  variant: VariantButton;
  text?: string;
  children?: ReactNode;
}
