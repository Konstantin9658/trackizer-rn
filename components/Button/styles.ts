import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 30,
    borderWidth: 1,
    position: "relative",
    paddingVertical: 14,
  },
  button_icon: {
    borderRadius: 16,
    width: 48,
    height: 48,
  },
  button_small: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  button_pressed: {
    opacity: 0.4,
    shadowOpacity: 0,
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 30,
  },
  button_secondary: {
    backgroundColor: Colors.gray_20,
    borderColor: Colors.white_10,
  },
  button_primary: {
    borderColor: Colors.white_20,
    backgroundColor: Colors.accent_primary.accent_p_100,
    shadowColor: Colors.accent_primary.accent_p_100,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
  },
  text: {
    color: Colors.white,
    fontFamily: "Inter-600",
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh20,
    letterSpacing: 0.2,
  },
  text_small: {
    fontSize: FontSize.fs12,
    lineHeight: LineHeight.lh16,
  },
  text_dark: {
    color: Colors.black,
  },
});
