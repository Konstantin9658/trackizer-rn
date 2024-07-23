import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styles } from "../commonStyles";
import { Input } from "@/components/Input/Input";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { Routes } from "@/constants/Routes";
// import { useState } from "react";
import { Password } from "@/components/Password/Password";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/Button/Button";
import { SignUpFormData } from "./types";

export const SignUpScreen = () => {
  // const [, setEmail] = useState<string>("");

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
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.wrapper}>
        <View style={styles.wrapperCenter}>
          <View style={styles.inputGroup}>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Required" }}
              render={({ field }) => (
                <Input
                  value={field.value}
                  keyboardType="email-address"
                  blurOnSubmit
                  inputMode="email"
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                  onChangeText={field.onChange}
                  label="E-mail address"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: "Please enter password" }}
              render={({ field }) => (
                <Password
                  isSignUp
                  isInvalid={!!errors.password}
                  errorMessage={errors.password?.message}
                  value={field.value}
                  onChangeText={field.onChange}
                />
              )}
            />
          </View>
          <Button
            onPress={handleSubmit(onSubmit)}
            title="Get started, it’s free!"
            variant="primary"
          />
        </View>
        <View>
          <Text style={styles.signInText}>Do you have already an account?</Text>
          <ButtonLink route={Routes.login} text="Sign In" variant="secondary" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
