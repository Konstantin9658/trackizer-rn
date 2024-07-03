import { TextInput, Text, View } from "react-native";
import { inputStyles } from "./styles";
import { InputProps } from "./Input.types";
// import { useState } from "react";

export const Input = ({
  label,
  isPassword,
  isRegister = false,
  ...props
}: InputProps) => {
  // const [password, setPassword] = useState<string>("");
  return (
    <View style={inputStyles.wrapper}>
      {label && <Text style={inputStyles.label}>{label}</Text>}
      <TextInput
        secureTextEntry={isPassword}
        style={inputStyles.input}
        {...props}
      />
      {isRegister && (
        <View>
          <View style={inputStyles.passLevel}>
            <View
              style={[inputStyles.passLevelBox, inputStyles.passLevelBoxFirst]}
            />
            <View style={inputStyles.passLevelBox} />
            <View style={inputStyles.passLevelBox} />
            <View
              style={[inputStyles.passLevelBox, inputStyles.passLevelBoxLast]}
            />
          </View>
          <Text style={inputStyles.passLevelDesription}>
            Use 8 or more characters with a mix of letters,
            numbers&nbsp;&&nbsp;symbols.
          </Text>
        </View>
      )}
    </View>
  );
};
