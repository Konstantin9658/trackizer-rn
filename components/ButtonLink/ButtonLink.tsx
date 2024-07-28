import { Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles";
import { ButtonLinkProps } from "./types";

export const ButtonLink = ({ text, variant, route }: ButtonLinkProps) => {
  return (
    <Link
      style={[
        styles.link,
        variant === "primary" && styles.link_primary,
        variant === "secondary" && styles.link_secondary,
      ]}
      href={route}
      asChild
    >
      <TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </Link>
  );
};
