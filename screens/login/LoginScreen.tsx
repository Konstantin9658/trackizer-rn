import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Routes } from "@/constants/Routes";
import { commonStyles } from "../commonStyles";
import { styles } from "./styles";
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { LoginFormData } from "./types";
import { Header } from "@/components/Header/Header";
import { Input } from "@/components/Input/Input";
import { Password } from "@/components/Password/Password";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Button } from "@/components/Button/Button";
import { navigateTo } from "@/utils/common";

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
      <View style={commonStyles.wrapper}>
        <Header />
        <View style={commonStyles.wrapperCenter}>
          <View style={commonStyles.inputGroup}>
            <Controller
              rules={{
                required: { value: true, message: "Required" },
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Please enter correct email address",
                },
              }}
              name="login"
              control={control}
              render={({ field }) => (
                <Input
                  label="Login"
                  onChangeText={field.onChange}
                  value={field.value}
                  inputMode="email"
                  keyboardType="email-address"
                  hasError={!!errors.login}
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
                  hasError={!!errors.password}
                  value={field.value}
                  errorMessage={errors.password?.message}
                  onChangeText={field.onChange}
                />
              )}
            />
            <View style={styles.checkboxWrapper}>
              <Controller
                name="isRememberMe"
                control={control}
                render={({ field }) => (
                  <Checkbox onPress={field.onChange} label="Remember me" />
                )}
              />
              <Link suppressHighlighting asChild href={Routes.index}>
                <TouchableOpacity>
                  <Text style={styles.text}>Forgot password</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
          <Button
            onPress={handleSubmit(onSubmit)}
            text="Sign In"
            variant="primary"
          />
        </View>
        <View>
          <Text style={commonStyles.signInText}>
            If you don't have an account yet?
          </Text>
          <Button
            onPress={navigateTo(Routes.quickStart)}
            text="Sign Up"
            variant="secondary"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
