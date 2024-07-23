import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    textDecorationLine: "none",
    display: "flex",
    fontFamily: "Inter-400",
    fontSize: FontSize.fs14,
    flexShrink: 0,
    lineHeight: LineHeight.lh20,
    letterSpacing: 0.2,
    color: Colors.grayscale.gray_50,
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
});
