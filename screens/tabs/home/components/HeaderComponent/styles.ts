import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 24,
    paddingHorizontal: 24,
    backgroundColor: Colors.grayscale.gray_70,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  subs: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
});
