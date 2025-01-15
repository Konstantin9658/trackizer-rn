import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
  variant?: "left" | "center";
  labelSize?: "small" | "normal";
  mode?: "text" | "number";
}
