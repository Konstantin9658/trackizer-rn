import { Text, TouchableOpacity, View } from "react-native";
import { CustomButtonProps } from "./types";
import { styles } from "./styles";

export const Button = ({ variant, ...props }: CustomButtonProps) => {
  return (
    <TouchableOpacity {...props}>
      <View
        style={[
          styles.button,
          variant === "dark" && styles.button_dark,
          variant === "light" && styles.button_light,
          variant === "blue" && styles.button_blue,
          variant === "primary" && styles.button_primary,
        ]}
      >
        <Text style={[styles.text, variant === "light" && styles.text_dark]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
