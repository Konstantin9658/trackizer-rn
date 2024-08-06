import { Colors } from "@/constants/Colors";
import { stylesMain } from "@/styles/main";
import { useFonts } from "expo-font";
import { Stack, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-400": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-500": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-600": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-700": require("../assets/fonts/Inter-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar style="light" />
      <View style={stylesMain.main} onLayout={onLayoutRootView}>
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
      </View>
    </>
  );
}
