import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  error: {
    position: "absolute",
    backgroundColor: Colors.red,
    width: Dimensions.get("screen").width,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 40,
  },
  error_text: {
    color: Colors.white,
    fontFamily: "Inter-600",
    fontSize: FontSize.fs16,
    lineHeight: LineHeight.lh24,
  },
});
