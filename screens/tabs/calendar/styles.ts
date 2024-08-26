import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.grayscale.gray_80 },
  title: {
    color: Colors.grayscale.gray_30,
    fontSize: FontSize.fs16,
    lineHeight: LineHeight.lh24,
    fontFamily: "Inter-400",
    textAlign: "center",
  },
});
