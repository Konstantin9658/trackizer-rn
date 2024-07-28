import { View, Text } from "react-native";
import { styles } from "./styles";
import { passwordStrength } from "check-password-strength";
import { StrengthPasswordProps, PassLevelType } from "./types";

export const StrengthPassword = ({ password }: StrengthPasswordProps) => {
  const passStrength = passwordStrength(password).id;

  const pass = passwordStrength(password)
    .value.toLowerCase()
    .split(/\s+/)
    .join("") as PassLevelType;

  return (
    <View style={styles.wrapper}>
      <View style={styles.indicators}>
        <View
          style={[
            styles.indicator,
            styles.indicatorFirst,
            password.length !== 0 && styles[pass],
          ]}
        />
        <View style={[styles.indicator, passStrength >= 1 && styles[pass]]} />
        <View style={[styles.indicator, passStrength >= 2 && styles[pass]]} />
        <View
          style={[
            styles.indicator,
            styles.indicatorLast,
            passStrength === 3 && styles[pass],
          ]}
        />
      </View>
      <Text style={styles.description}>
        Use 8 or more characters with a mix of letters,
        numbers&nbsp;&&nbsp;symbols.
      </Text>
    </View>
  );
};
