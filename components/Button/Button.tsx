import { Pressable, Text } from "react-native";
import { CustomButtonProps } from "./types";
import { styles } from "./styles";
import { PrimaryRadialGradient } from "./PrimaryRadialGradient";
import { SecondaryLinearGradient } from "./SecondaryLinearGradient";

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
      {variant === "primary" && (
        <PrimaryRadialGradient style={styles.gradient} height={48} />
      )}
      {variant === "secondary" && (
        <SecondaryLinearGradient style={styles.gradient} height={48} />
      )}
      {content}
    </Pressable>
  );
};
