import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grayscale.gray_80,
    position: "relative",
  },
  headerTitle: {
    color: Colors.grayscale.gray_30,
    fontSize: FontSize.fs16,
    lineHeight: LineHeight.lh24,
    fontFamily: "Inter-400",
    textAlign: "center",
    width: "100%",
  },
  buttonBack: {
    position: "absolute",
    zIndex: 1,
    left: 26,
  },
  header: {
    backgroundColor: Colors.grayscale.gray_70,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingBottom: 20,
  },
  title: {
    marginTop: 40,
    marginBottom: 56,
    fontFamily: "Inter-700",
    fontSize: FontSize.fs40,
    lineHeight: LineHeight.lh40,
    color: Colors.white,
    textAlign: "center",
  },
  subContainer: {
    alignItems: "center",
  },
  subIcon: {
    width: 161,
    height: 161,
    borderRadius: 48,
    marginBottom: 23,
  },
  subName: {
    fontFamily: "Inter-600",
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh20,
    color: Colors.white,
    textAlign: "center",
  },
  content: {
    marginTop: 24,
    paddingHorizontal: 24,
    flex: 1,
  },
  submit: {
    marginTop: "auto",
  },
});
