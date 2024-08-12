import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { FilterValue, TabProps, TabTitle } from "./types";
import { useAtomValue, useSetAtom } from "jotai";
import { currentFilter } from "@/store/home";

const Tab = (props: TabProps) => {
  const { title, isActive, ...rest } = props;
  return (
    <Pressable
      {...rest}
      style={({ pressed }) => [
        styles.tab,
        isActive && styles.tab_active,
        pressed && styles.tab_pressed,
      ]}
    >
      <Text style={[styles.text, isActive && styles.text_active]}>{title}</Text>
    </Pressable>
  );
};

export const Tabs = () => {
  const setFilter = useSetAtom(currentFilter);
  const filter = useAtomValue(currentFilter);

  const handlePressTab = (activeTab: FilterValue) => () => {
    setFilter(activeTab);
  };
  return (
    <View style={styles.container}>
      <Tab
        isActive={filter === FilterValue.Subscriptions}
        title={TabTitle.Subscriptions}
        onPress={handlePressTab(FilterValue.Subscriptions)}
      />
      <Tab
        isActive={filter === FilterValue.Upcoming}
        title={TabTitle.Upcoming}
        onPress={handlePressTab(FilterValue.Upcoming)}
      />
    </View>
  );
};
