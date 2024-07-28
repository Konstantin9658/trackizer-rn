import { Input } from "../Input/Input";
import { PasswordProps } from "./types";

export const Password = ({
  hasError = false,
  errorMessage,
  ...props
}: PasswordProps) => {
  return (
    <Input
      hasError={hasError}
      errorMessage={errorMessage}
      label="Password"
      secureTextEntry
      {...props}
    />
  );
};
