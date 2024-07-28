import { TextInput, Text, View } from "react-native";
import { styles } from "./styles";
import { InputProps } from "./types";
import { HelperText } from "../HelperText/HelperText";
import { Colors } from "@/constants/Colors";

export const Input = ({
  label,
  hasError = false,
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
        selectionColor={Colors.white}
        style={[styles.input, hasError && styles.input_error]}
        {...props}
      />
      {hasError && <HelperText text={errorMessage} type="error" />}
    </View>
  );
};
