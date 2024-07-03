import { View, Text } from "react-native";
import { styles } from "./styles";
import { Input } from "@/components/Input/Input";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { Routes } from "@/constants/Routes";

export const RegisterEmailScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperCenter}>
        <View style={styles.input_group}>
          <Input label="E-mail address" />
          <Input isRegister isPassword label="Password" />
        </View>
        <ButtonLink
          route={Routes.index}
          text="Get started, it’s free!"
          variant="primary"
        />
      </View>
      <View>
        <Text style={styles.signInText}>Do you have already an account?</Text>
        <ButtonLink route={Routes.login} text="Sign In" variant="secondary" />
      </View>
    </View>
  );
};
