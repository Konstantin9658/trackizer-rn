import { View, Text } from "react-native";
import { styles } from "../commonStyles";
import { Button } from "@/components/Button/Button";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { Routes } from "@/constants/Routes";

export const QuickStartScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonGroup}>
        <Button variant="dark" title="Sign up with Apple" />
        <Button variant="light" title="Sign up with Google" />
        <Button variant="blue" title="Sign up with Facebook" />
      </View>
      <Text style={styles.separate}>or</Text>
      <View>
        <ButtonLink
          route={Routes.signUp}
          variant="secondary"
          text="Sign up with E-mail"
        />
        <Text style={styles.description}>
          By registering, you agree to our Terms of Use. Learn how we collect,
          use and share your data.
        </Text>
      </View>
    </View>
  );
};
