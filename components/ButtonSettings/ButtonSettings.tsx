import { Pressable, PressableProps } from "react-native";
import { styles } from "./styles";
import { IconSettings } from "@/assets/Icons/IconSettings";
import { navigateTo } from "@/utils/common";
import { Routes } from "@/constants/Routes";

export const ButtonSettings = (props: PressableProps) => {
  return (
    <Pressable {...props} onPress={navigateTo(Routes.settings)}>
      {({ pressed }) => <IconSettings style={pressed && styles.pressed} />}
    </Pressable>
  );
};
