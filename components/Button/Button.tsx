import { Pressable, Text } from "react-native";
import { CustomButtonProps } from "./types";
import { styles } from "./styles";
import { RadialGradient } from "../RadialGradient/RadialGradient";

const colorList = [
  { offset: "0.4325", color: "rgba(255, 255, 255, 0)", opacity: "0" },
  { offset: "1", color: "rgba(255, 127, 55, 0.5)", opacity: "1" },
];

export const Button = (props: CustomButtonProps) => {
  const { variant, children, text, ...otherProps } = props;
  const content = children || <Text style={styles.text}>{text}</Text>;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.button_pressed,
        variant === "primary" && styles.button_primary,
        variant === "secondary" && styles.button_secondary,
      ]}
      {...otherProps}
    >
      <RadialGradient
        style={styles.gradient}
        colorList={colorList}
        x="50%"
        y="100%"
        rx="100%"
        ry="100%"
      />
      {content}
    </Pressable>
  );
};
