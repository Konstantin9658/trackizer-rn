import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grayscale.gray_100,
    paddingVertical: 7,
    paddingHorizontal: 9,
    marginTop: 21,
    borderRadius: 16,
    flexDirection: "row",
  },
  text: {
    color: Colors.grayscale.gray_30,
    fontFamily: "Inter-600",
    fontSize: FontSize.fs12,
    lineHeight: LineHeight.lh16,
    textAlign: "center",
  },
  text_active: {
    color: Colors.white,
  },

  tab: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 16,
    height: 36,
    width: 155,
    borderWidth: 1,
    borderColor: Colors.transparent,
  },
  tab_pressed: {
    opacity: 0.4,
  },
  tab_active: {
    pointerEvents: "none",
    borderColor: Colors.light_gray,
    backgroundColor: Colors.gray_20,
  },
  wrapper: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
});
