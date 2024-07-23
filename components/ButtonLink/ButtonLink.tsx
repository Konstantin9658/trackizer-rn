import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles";
import { ButtonLinkProps } from "./types";

export const ButtonLink = ({ text, variant, route }: ButtonLinkProps) => {
  return (
    <Link href={route} asChild>
      <TouchableOpacity>
        <View
          style={[
            styles.link,
            variant === "primary" && {
              ...styles.link_primary,
            },
            variant === "secondary" && {
              ...styles.link_secondary,
            },
          ]}
        >
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};
