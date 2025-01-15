import { TextInput, Text, View } from "react-native";
import { styles } from "./styles";
import { InputProps } from "./types";
import { HelperText } from "../HelperText/HelperText";
import { Colors } from "@/constants/Colors";

export const Input = ({
  label,
  hasError = false,
  errorMessage,
  variant = "left",
  labelSize = "normal",
  ...props
}: InputProps) => {
  return (
    <View>
      <Text
        style={[
          styles.label,
          variant === "center" && styles.label_centered,
          labelSize === "small" && styles.label_small,
        ]}
      >
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
