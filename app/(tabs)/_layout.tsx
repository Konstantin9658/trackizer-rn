import { IconAddNew } from "@/assets/Icons/TabIcon/IconAddNew";
import { IconBudgets } from "@/assets/Icons/TabIcon/IconBudgets";
import { IconCalendar } from "@/assets/Icons/TabIcon/IconCalendar";
import { IconCreditCards } from "@/assets/Icons/TabIcon/IconCredirCards";
import { IconHome } from "@/assets/Icons/TabIcon/IconHome";
import { ButtonSettings } from "@/components/ButtonSettings/ButtonSettings";
import { TabBar } from "@/components/TabBar/TabBar";
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

const TABS_SCREEN_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
};

const renderCustomTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

const styles = StyleSheet.create({
  offsetIcon: {
    top: -5,
  },
});

export default function TabLayout() {
  return (
    <>
      <ButtonSettings />
      <Tabs tabBar={renderCustomTabBar} screenOptions={TABS_SCREEN_OPTIONS}>
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
    </>
  );
}
