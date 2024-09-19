import { View } from "react-native";
import { styles } from "./styles";
import { SubsCard } from "./components/SubsCard/SubsCard";
import { SUBSCRIPTIONS } from "./consts";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import { useAtom } from "jotai";
import { tabsHeight } from "@/store/app";

export const HomeScreen = () => {
  const [currentTabsHeight] = useAtom(tabsHeight);

  const offsetBottom = currentTabsHeight + 30;

  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        onStartReachedThreshold={0.9}
        ListHeaderComponent={<HeaderComponent />}
        ListFooterComponent={<View style={{ paddingBottom: offsetBottom }} />}
        data={SUBSCRIPTIONS}
        keyExtractor={(item, index) => `subs-${item.name}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.cards}>
            <SubsCard item={item} />
          </View>
        )}
      />
    </GestureHandlerRootView>
  );
};
