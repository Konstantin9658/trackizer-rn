import { View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { TabBg } from "./components/TabBg";
import { TabButtons } from "./components/TabButtons/TabButtons";

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ExpoLinearGradient
        style={styles.gradient}
        colors={[`${Colors.grayscale.gray_80}`, `${Colors.transparent}`]}
        locations={[0.5, 0.01]}
        dither
      />
      <View style={styles.tabContainer}>
        <TabBg style={styles.tabBg} />
        <TabButtons
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};
