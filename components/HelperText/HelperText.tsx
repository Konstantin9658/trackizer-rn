import { Text } from "react-native";
import { HelperTextProps } from "./types";
import { styles } from "./styles";

export const HelperText = ({ type, text }: HelperTextProps) => {
  return (
    <Text style={[styles.text, type === "error" && styles.textError]}>
      {text}
    </Text>
  );
};
