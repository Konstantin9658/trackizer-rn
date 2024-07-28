import { Pressable, PressableProps } from "react-native";
import { router } from "expo-router";
import { IconBack } from "@/assets/Icons/IconBack";
import { styles } from "./styles";

export const ButtonBack = (props: PressableProps) => {
  return (
    <Pressable {...props} onPress={router.back}>
      {({ pressed }) => <IconBack style={pressed && styles.pressed} />}
    </Pressable>
  );
};
