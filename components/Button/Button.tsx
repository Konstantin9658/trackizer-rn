import { Pressable, Text, ViewStyle } from "react-native";
import { CustomButtonProps } from "./types";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";

export const Button = (props: CustomButtonProps) => {
  const { variant, children, text, style, size = "normal", ...rest } = props;
  const content = children || (
    <Text style={[styles.text, size === "small" && styles.text_small]}>
      {text}
    </Text>
  );

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        style as ViewStyle,
        styles[`button_${variant}`],
        pressed && styles.button_pressed,
        size === "small" && styles.button_small,
      ]}
      {...rest}
    >
      {variant === "primary" && (
        <LinearGradient
          style={styles.gradient}
          colors={[`${Colors.white_20}`, `${Colors.transparent}`]}
          locations={[0.1, 0.9]}
          dither
        />
      )}
      {content}
    </Pressable>
  );
};
