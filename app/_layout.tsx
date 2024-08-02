import { Colors } from "@/constants/Colors";
import { stylesContainer } from "@/styles/container";
import { stylesMain } from "@/styles/main";
import { useFonts } from "expo-font";
import { Stack, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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

  const paddingTop = Platform.OS === "android" ? 40 : 20;

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <View style={stylesMain.main} onLayout={onLayoutRootView}>
        <View
          style={{
            ...stylesContainer.container,
            paddingTop,
          }}
        >
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
      </View>
    </SafeAreaView>
  );
}
