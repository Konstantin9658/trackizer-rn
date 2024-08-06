import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  total: {
    color: Colors.white,
    fontFamily: "Inter-700",
    fontSize: FontSize.fs40,
    lineHeight: LineHeight.lh40,
    marginTop: 24,
    marginBottom: 16,
  },
  inner: {
    width: "100%",
    height: "100%",
    paddingTop: 64,
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    top: 0,
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
  settings: {
    position: "absolute",
    right: 23,
    top: 32,
    zIndex: 2,
  },
  progress: {
    alignItems: "center",
    paddingTop: 0,
  },
  container: {
    position: "relative",
    paddingTop: 20,
    paddingBottom: 24,
    backgroundColor: Colors.grayscale.gray_70,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  button: {
    marginTop: "auto",
    marginBottom: 36,
  },
  subs: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  subsBox: {
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
  subsBox_decor: {
    position: "absolute",
    zIndex: 1,
    width: 46,
    height: 1,
    top: 0,
    left: "50%",
    transform: [{ translateX: -23 }],
  },
});
