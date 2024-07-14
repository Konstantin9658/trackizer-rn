import { Welcome } from "@/screens/welcome/Welcome";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Index() {
  return (
    <View style={styles.app}>
      <Welcome />
    </View>
  );
}
