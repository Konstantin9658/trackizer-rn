import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export const BudgetsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Spending & Budgets</Text>
    </SafeAreaView>
  );
};
