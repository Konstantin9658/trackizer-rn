import { Pressable, Text } from "react-native";
import { CustomButtonProps } from "./types";
import { styles } from "./styles";

export const Button = (props: CustomButtonProps) => {
  const { variant, children, text, ...otherProps } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.button_pressed,
        variant === "primary" && styles.button_primary,
      ]}
      {...otherProps}
    >
      {children}
      {text && <Text style={styles.text}>{text}</Text>}
    </Pressable>
  );
};
