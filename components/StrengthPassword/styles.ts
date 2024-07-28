import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: 8,
  },
  indicators: {
    width: "100%",
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 3,
  },
  indicator: {
    backgroundColor: Colors.grayscale.gray_70,
    width: Dimensions.get("screen").width / 5 + 5,
    height: 5,
  },
  indicator_tooweak: {
    backgroundColor: Colors.red,
  },
  tooweak: {
    backgroundColor: Colors.red,
  },
  weak: {
    backgroundColor: Colors.yellow,
  },
  medium: {
    backgroundColor: Colors.yellow,
  },
  strong: {
    backgroundColor: Colors.green,
  },
  indicatorFirst: {
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
  },
  indicatorLast: {
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
  },
  description: {
    color: Colors.grayscale.gray_50,
    fontFamily: "Inter-500",
    fontSize: FontSize.fs12,
    lineHeight: LineHeight.lh16,
    letterSpacing: 0.2,
    marginTop: 16,
  },
});
