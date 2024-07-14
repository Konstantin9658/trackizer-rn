import { TextInput, Text, View } from "react-native";
import { styles } from "./styles";
import { InputProps } from "./Input.types";
import { useState } from "react";
import { StrengthPassword } from "../StrengthPassword/StrengthPassword";
import { Checkbox } from "../Checkbox/Checkbox";

export const Input = ({
  label,
  isPassword = false,
  isCenteredLabel = false,
  isLogin = false,
  isRegister = false,
  ...props
}: InputProps) => {
  const [, setText] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <View>
      <Text style={[styles.label, isCenteredLabel && styles.labelCentered]}>
        {label}
      </Text>
      <TextInput
        autoCapitalize="none"
        secureTextEntry={isPassword}
        onChangeText={isPassword ? setPassword : setText}
        style={styles.input}
        {...props}
      />
      {isRegister && <StrengthPassword password={password} />}
      {isLogin && <Checkbox />}
    </View>
  );
};
