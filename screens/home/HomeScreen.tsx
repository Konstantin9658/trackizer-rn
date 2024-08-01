import { Button } from "@/components/Button/Button";
import { Routes } from "@/constants/Routes";
import { navigateTo } from "@/utils/common";
import { View } from "react-native";

export const HomeScreen = () => {
  return (
    <View>
      <Button
        text="Go back"
        variant="secondary"
        onPress={navigateTo(Routes.index)}
      />
    </View>
  );
};
