import { Colors } from "@/constants/Colors";
import { Gaps } from "@/constants/Gaps";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: Colors.white,
    textAlign: "center",
    fontFamily: "Inter-400",
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh20,
    letterSpacing: 0.2,
    paddingHorizontal: 27,
  },
  image: {
    margin: "auto",
    position: "relative",
  },
  decor_left: {
    position: "absolute",
    top: 60,
    left: 0,
  },
  decor_right: {
    position: "absolute",
    right: 0,
    top: 336,
  },
  decor_highlight: {
    position: "absolute",
    top: 203,
    right: 0,
    zIndex: -1,
  },
  group_button: {
    marginTop: 40,
    gap: Gaps.g16,
    width: "100%",
    paddingHorizontal: 26,
  },
});
