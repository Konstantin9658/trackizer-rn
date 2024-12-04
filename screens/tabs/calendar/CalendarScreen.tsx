import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export const CalendarScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
    </SafeAreaView>
  );
};
