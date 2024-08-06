import { Header } from "@/components/Header/Header";
import { SafeAreaContainer } from "@/components/SafeAreaContainer/SafeAreaContainer";
import { Colors } from "@/constants/Colors";
import { stylesContainer } from "@/styles/container";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";

export default function AuthLayout() {
  const paddingTop = Platform.OS === "android" ? 40 : 20;

  return (
    <SafeAreaContainer>
      <StatusBar style="light" />
      <View
        style={{
          ...stylesContainer.container,
          paddingTop,
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
      </View>
    </SafeAreaContainer>
  );
}
