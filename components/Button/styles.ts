import { BorderColor, Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 30,
    borderWidth: 1,
    overflow: "hidden",
    position: "relative",
  },
  button_pressed: {
    opacity: 0.4,
  },
  gradient: {
    position: "absolute",
  },
  button_secondary: {
    backgroundColor: Colors.black,
    borderColor: Colors.black_10,
  },
  button_primary: {
    borderColor: BorderColor.accent,
    backgroundColor: Colors.accent_primary.accent_p_100,
  },
  text: {
    color: Colors.white,
    fontFamily: "Inter-600",
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh20,
    letterSpacing: 0.2,
  },
  text_dark: {
    color: Colors.black,
  },
});
