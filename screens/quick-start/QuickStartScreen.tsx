import { View, Text } from "react-native";
import { commonStyles } from "../commonStyles";
import { Routes } from "@/constants/Routes";
import { styles } from "./styles";
import { Header } from "@/components/Header/Header";
import { Button } from "@/components/Button/Button";
import { navigateTo } from "@/utils/common";

export const QuickStartScreen = () => {
  return (
    <View style={commonStyles.wrapper}>
      <Header />
      <View style={styles.dummyWrapper}>
        <Button
          onPress={navigateTo(Routes.signUp)}
          variant="secondary"
          text="Sign up with E-mail"
        />
        <Text style={commonStyles.description}>
          By registering, you agree to our Terms of Use. Learn how we collect,
          use and share your data.
        </Text>
      </View>
    </View>
  );
};
