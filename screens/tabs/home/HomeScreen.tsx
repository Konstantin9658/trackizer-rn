import { View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { SubsCard } from "./components/SubsCard/SubsCard";
import { SUBSCRIPTIONS } from "./consts";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";

export const HomeScreen = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        ListHeaderComponent={<HeaderComponent />}
        ListFooterComponent={<SafeAreaView edges={["bottom"]} />}
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
