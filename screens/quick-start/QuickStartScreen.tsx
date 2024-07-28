import { View, Text } from "react-native";
import { commonStyles } from "../commonStyles";
import { Routes } from "@/constants/Routes";
import { styles } from "./styles";
import { ButtonLink, Header } from "@/components";

export const QuickStartScreen = () => {
  return (
    <View style={commonStyles.wrapper}>
      <Header />
      <View style={styles.dummyWrapper}>
        <ButtonLink
          route={Routes.signUp}
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
