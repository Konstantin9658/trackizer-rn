import { TextInputProps } from "react-native";

export interface PasswordProps extends TextInputProps {
  hasError?: boolean;
  errorMessage?: string;
}
