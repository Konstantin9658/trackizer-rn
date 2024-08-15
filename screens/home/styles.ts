import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    paddingTop: 20,
    paddingBottom: 24,
    paddingHorizontal: 24,
    backgroundColor: Colors.grayscale.gray_70,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
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
  progress: {
    alignItems: "center",
    paddingTop: 0,
  },
  button: {
    marginTop: "auto",
    marginBottom: 30,
  },
  subs: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  wrapper: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  cards: {
    width: "100%",
    paddingHorizontal: 24,
  },
});
