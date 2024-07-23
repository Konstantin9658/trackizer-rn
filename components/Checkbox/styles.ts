import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // wrapper: {
  //   marginTop: 24,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    textDecorationLine: "none",
    display: "flex",
    fontFamily: "Inter-400",
    fontSize: FontSize.fs14,
    flexShrink: 0,
    lineHeight: LineHeight.lh20,
    letterSpacing: 0.2,
    color: Colors.grayscale.gray_50,
    marginLeft: 8,
  },
  icon: {
    borderRadius: 10,
  },
  innerIcon: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.grayscale.gray_70,
  },
});
