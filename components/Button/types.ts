import { ReactNode } from "react";
import { PressableProps } from "react-native";

export type VariantButton = "primary" | "secondary";

export interface CustomButtonProps extends PressableProps {
  variant: VariantButton;
  text?: string;
  children?: ReactNode;
}
