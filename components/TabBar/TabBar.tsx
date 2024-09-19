import { LayoutChangeEvent, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { TabBg } from "./components/TabBg";
import { TabButtons } from "./components/TabButtons/TabButtons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { tabsHeight } from "@/store/app";
import { useSetAtom } from "jotai";

export const TabBar = (props: BottomTabBarProps) => {
  const setTabsHeight = useSetAtom(tabsHeight);

  const handleLayoutInit = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setTabsHeight(height);
  };

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={styles.container}
      onLayout={handleLayoutInit}
    >
      <ExpoLinearGradient
        style={styles.gradient}
        colors={[`${Colors.grayscale.gray_80}`, `${Colors.transparent}`]}
        locations={[0.7, 0.01]}
        dither
      />
      <View style={styles.tabContainer}>
        <TabBg style={styles.tabBg} />
        <TabButtons {...props} />
      </View>
    </SafeAreaView>
  );
};
