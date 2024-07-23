import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Input } from "@/components/Input/Input";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { Routes } from "@/constants/Routes";
import { styles } from "../commonStyles";
import { styles as loginStyles } from "./styles";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Password } from "@/components/Password/Password";
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { LoginFormData } from "./types";
import { Button } from "@/components/Button/Button";

export const LoginScreen = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>({
    defaultValues: {
      login: "",
      password: "",
      isRememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormData) => console.log(data);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.wrapper}>
        <View style={styles.wrapperCenter}>
          <View style={styles.inputGroup}>
            <Controller
              rules={{ required: "Required" }}
              name="login"
              control={control}
              render={({ field }) => (
                <Input
                  label="Login"
                  onChangeText={field.onChange}
                  value={field.value}
                  inputMode="email"
                  keyboardType="email-address"
                  isInvalid={!!errors.login}
                  errorMessage={errors.login?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: "Please enter password" }}
              render={({ field }) => (
                <Password
                  isInvalid={!!errors.password}
                  value={field.value}
                  errorMessage={errors.password?.message}
                  onChangeText={field.onChange}
                />
              )}
            />
            <View style={loginStyles.checkboxWrapper}>
              <Controller
                name="isRememberMe"
                control={control}
                render={({ field }) => (
                  <Checkbox onPress={field.onChange} label="Remember me" />
                )}
              />
              <Link suppressHighlighting asChild href={Routes.index}>
                <TouchableOpacity>
                  <Text style={loginStyles.text}>Forgot password</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
          <Button
            onPress={handleSubmit(onSubmit)}
            title="Sign In"
            variant="primary"
          />
        </View>
        <View>
          <Text style={styles.signInText}>
            If you don't have an account yet?
          </Text>
          <ButtonLink
            route={Routes.quickStart}
            text="Sign Up"
            variant="secondary"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
