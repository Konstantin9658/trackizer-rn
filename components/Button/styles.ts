import { BorderColor, Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 1,
  },
  button_dark: {
    backgroundColor: Colors.black,
  },
  button_blue: {
    backgroundColor: Colors.blue,
    borderColor: BorderColor.blue,
  },
  button_primary: {
    borderColor: BorderColor.accent,
    backgroundColor: Colors.accent_primary.accent_p_100,
  },
  button_light: {
    backgroundColor: Colors.white,
    color: Colors.white,
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
