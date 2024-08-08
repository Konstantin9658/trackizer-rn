import { ButtonSettings } from "@/components/ButtonSettings/ButtonSettings";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <>
      <ButtonSettings />
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: Colors.grayscale.gray_80,
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
