import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    minHeight: 68,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.gray_20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.light_gray,
    position: "relative",
  },
  decor: {
    position: "absolute",
    zIndex: 1,
    width: 46,
    height: 1,
    top: -1,
    left: "50%",
    transform: [{ translateX: -23 }],
  },
  decor_active: {
    backgroundColor: Colors.accent_primary.accent_p_50,
  },
  decor_highest: {
    backgroundColor: Colors.primary.primary_100,
  },
  decor_lowest: {
    backgroundColor: Colors.accent_secondary.accent_s_50,
  },
  text: {
    fontFamily: "Inter-600",
    fontSize: FontSize.fs12,
    lineHeight: LineHeight.lh16,
    color: Colors.grayscale.gray_40,
  },
  count: {
    fontFamily: "Inter-600",
    color: Colors.white,
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh20,
  },
});
