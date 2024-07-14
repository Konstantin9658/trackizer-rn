import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Input } from "@/components/Input/Input";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { Routes } from "@/constants/Routes";
import { styles } from "../register/styles";

export const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.wrapper}>
        <View style={styles.wrapperCenter}>
          <View style={styles.input_group}>
            <Input label="Login" />
            <Input isLogin isPassword label="Password" />
          </View>
          <ButtonLink route={Routes.index} text="Sign In" variant="primary" />
        </View>
        <View>
          <Text style={styles.signInText}>
            If you don't have an account yet?
          </Text>
          <ButtonLink
            route={Routes.register}
            text="Sign Up"
            variant="secondary"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
