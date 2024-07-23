import { TextInput, Text, View } from "react-native";
import { styles } from "./styles";
import { InputProps } from "./types";
import { HelperText } from "../HelperText/HelperText";

export const Input = ({
  label,
  isInvalid = false,
  errorMessage,
  isCenteredLabel = false,
  ...props
}: InputProps) => {
  return (
    <View>
      <Text style={[styles.label, isCenteredLabel && styles.label_centered]}>
        {label}
      </Text>
      <TextInput
        autoCapitalize="none"
        style={[styles.input, isInvalid && styles.input_error]}
        {...props}
      />
      {isInvalid && <HelperText text={errorMessage} type="error" />}
    </View>
  );
};
