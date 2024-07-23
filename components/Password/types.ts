import { TextInputProps } from "react-native";

export interface PasswordProps extends TextInputProps {
  isSignUp?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
}
