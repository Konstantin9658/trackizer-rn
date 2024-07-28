import { commonStyles } from "../commonStyles";
import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Routes } from "@/constants/Routes";
import { Controller, useForm } from "react-hook-form";
import { SignUpFormData } from "./types";
import {
  Input,
  Password,
  StrengthPassword,
  Button,
  ButtonLink,
  Header,
} from "@/components";
import { router } from "expo-router";

export const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
    router.replace(Routes.home);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={commonStyles.wrapper}>
        <Header />
        <View style={commonStyles.wrapperCenter}>
          <View style={commonStyles.inputGroup}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: { value: true, message: "Required" },
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Please enter correct email address",
                },
              }}
              render={({ field }) => (
                <Input
                  value={field.value}
                  keyboardType="email-address"
                  blurOnSubmit
                  inputMode="email"
                  hasError={!!errors.email}
                  errorMessage={errors.email?.message}
                  onChangeText={field.onChange}
                  label="E-mail address"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: { value: true, message: "Please enter password" },
                minLength: { value: 8, message: "Use 8 or more symbols" },
              }}
              render={({ field }) => (
                <View>
                  <Password
                    hasError={!!errors.password}
                    errorMessage={errors.password?.message}
                    value={field.value}
                    onChangeText={field.onChange}
                  />
                  <StrengthPassword password={field.value ?? ""} />
                </View>
              )}
            />
          </View>
          <Button
            text="Get started, it’s free!"
            onPress={handleSubmit(onSubmit)}
            variant="primary"
          />
        </View>
        <View>
          <Text style={commonStyles.signInText}>
            Do you have already an account?
          </Text>
          <ButtonLink route={Routes.login} text="Sign In" variant="secondary" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
