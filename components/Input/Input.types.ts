import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
  isCenteredLabel?: boolean;
  isRegister?: boolean;
  isLogin?: boolean;
}
