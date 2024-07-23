import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { Routes } from "@/constants/Routes";
import { View } from "react-native";

export const HomeScreen = () => {
  return (
    <View>
      <ButtonLink text="Go back" variant="secondary" route={Routes.index} />
    </View>
  );
};
