import { View, Text } from "react-native";
import { styles } from "./styles";
import { passwordStrength } from "check-password-strength";

interface StrengthPasswordProps {
  password: string;
}

export const StrengthPassword = ({ password }: StrengthPasswordProps) => {
  const passStrength = passwordStrength(password).id;

  return (
    <View>
      <View style={styles.wrapper}>
        <View
          style={[
            styles.indicator,
            styles.indicatorFirst,
            passStrength >= 0 &&
              password.length !== 0 &&
              styles.indicator_tooweak,
          ]}
        />
        <View
          style={[styles.indicator, passStrength >= 1 && styles.indicator_weak]}
        />
        <View
          style={[
            styles.indicator,
            passStrength >= 2 && styles.indicator_medium,
          ]}
        />
        <View
          style={[
            styles.indicator,
            styles.indicatorLast,
            passStrength === 3 && styles.indicator_strong,
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
