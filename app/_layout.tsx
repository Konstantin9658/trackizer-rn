import TrackizerLogo from "@/components/Logo/Logo";
import { Colors } from "@/constants/Colors";
import { stylesContainer } from "@/styles/container";
import { stylesLogo } from "@/styles/logo";
import { stylesMain } from "@/styles/main";
import { useFonts } from "expo-font";
import { Stack, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  const [fontsLoaded, fontError] = useFonts({
    "Inter-400": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-500": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-600": require("../assets/fonts/Inter-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <View style={stylesMain.main} onLayout={onLayoutRootView}>
        <View style={stylesContainer.container}>
          <View style={stylesLogo.logo}>
            <TrackizerLogo />
          </View>
          <Stack
            screenOptions={{
              contentStyle: {
                backgroundColor: Colors.grayscale.gray_80,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
              },
              headerShown: false,
            }}
          >
            <Stack.Screen name="index" />
          </Stack>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
