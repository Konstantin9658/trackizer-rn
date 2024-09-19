import { IconAddNew } from "@/assets/Icons/TabIcon/IconAddNew";
import { IconBudgets } from "@/assets/Icons/TabIcon/IconBudgets";
import { IconCalendar } from "@/assets/Icons/TabIcon/IconCalendar";
import { IconCreditCards } from "@/assets/Icons/TabIcon/IconCredirCards";
import { IconHome } from "@/assets/Icons/TabIcon/IconHome";
import { ButtonSettings } from "@/components/ButtonSettings/ButtonSettings";
import { TabBar } from "@/components/TabBar/TabBar";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TABS_SCREEN_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: "red",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  offsetIcon: {
    top: -15,
  },
});

export default function TabLayout() {
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <ButtonSettings />
      <Tabs
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={TABS_SCREEN_OPTIONS}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => <IconHome focused={focused} />,
          }}
        />
        <Tabs.Screen
          name="budgets"
          options={{
            title: "Budgets",
            tabBarIcon: ({ focused }) => <IconBudgets focused={focused} />,
          }}
        />
        <Tabs.Screen
          name="new"
          options={{
            title: "New subs",
            tabBarIcon: ({ focused }) => (
              <IconAddNew focused={focused} style={styles.offsetIcon} />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            title: "Calendar",
            tabBarIcon: ({ focused }) => <IconCalendar focused={focused} />,
          }}
        />
        <Tabs.Screen
          name="cards"
          options={{
            title: "Cards",
            tabBarIcon: ({ focused }) => <IconCreditCards focused={focused} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
