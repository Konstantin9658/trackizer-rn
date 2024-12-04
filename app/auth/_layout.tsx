import { Header } from "@/components/Header/Header";
import { Colors } from "@/constants/Colors";
import { cameraOffset } from "@/constants/Utils";
import { stylesContainer } from "@/styles/container";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <SafeAreaView
      style={{
        ...stylesContainer.container,
        paddingTop: cameraOffset,
      }}
    >
      <Header />
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: Colors.grayscale.gray_80,
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="sign-up" />
      </Stack>
    </SafeAreaView>
  );
}
