import { Pressable, Text } from "react-native";
import { CustomButtonProps } from "./types";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";

export const Button = (props: CustomButtonProps) => {
  const { variant, children, text, ...rest } = props;
  const content = children || <Text style={styles.text}>{text}</Text>;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.button_pressed,
        variant === "primary" && styles.button_primary,
        variant === "secondary" && styles.button_secondary,
      ]}
      {...rest}
    >
      <LinearGradient
        style={styles.gradient}
        colors={[`${Colors.white_20}`, `${Colors.transparent}`]}
        locations={[0.1, 0.9]}
        dither
      />
      {content}
    </Pressable>
  );
};
