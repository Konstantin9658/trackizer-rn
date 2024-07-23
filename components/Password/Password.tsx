import { Input } from "../Input/Input";
import { PasswordProps } from "./types";
import { StrengthPassword } from "../StrengthPassword/StrengthPassword";
import { View } from "react-native";
import { styles } from "./styles";

export const Password = ({
  isSignUp = false,
  isInvalid = false,
  ...props
}: PasswordProps) => {
  return (
    <View>
      <Input
        isInvalid={isInvalid}
        label="Password"
        secureTextEntry
        {...props}
      />
      {isSignUp && (
        <View style={styles.hintWrapper}>
          <StrengthPassword password={props.value ?? ""} />
        </View>
      )}
    </View>
  );
};
