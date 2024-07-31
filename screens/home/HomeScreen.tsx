import { Button } from "@/components/Button/Button";
import { Routes } from "@/constants/Routes";
import { handleNavigate } from "@/utils/common";
import { View } from "react-native";

export const HomeScreen = () => {
  return (
    <View>
      <Button
        text="Go back"
        variant="secondary"
        onPress={handleNavigate(Routes.index)}
      />
    </View>
  );
};
