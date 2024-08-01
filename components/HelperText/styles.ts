import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    position: "absolute",
    bottom: -17,
    fontFamily: "Inter-400",
    fontSize: FontSize.fs12,
    lineHeight: LineHeight.lh16,
  },
  textError: {
    color: Colors.red,
  },
});
