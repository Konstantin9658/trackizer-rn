import { BorderColor } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  link: {
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 30,
    borderWidth: 1,
  },
  link_primary: {
    borderColor: BorderColor.accent,
    backgroundColor: Colors.accent_primary.accent_p_100,
  },
  link_secondary: {
    borderColor: BorderColor.light_dark,
  },
  text: {
    color: Colors.white,
    fontFamily: "Inter-600",
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh20,
    letterSpacing: 0.2,
  },
});
