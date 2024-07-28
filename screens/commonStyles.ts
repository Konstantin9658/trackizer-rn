import { Colors } from "@/constants/Colors";
import { Gaps } from "@/constants/Gaps";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  wrapper: {
    position: "relative",
    paddingHorizontal: 26,
    height: "100%",
  },
  wrapperCenter: {
    flex: 1,
    justifyContent: "center",
  },
  buttonGroup: {
    marginTop: "auto",
    gap: Gaps.g16,
  },
  separate: {
    textAlign: "center",
    marginVertical: 40,
    color: Colors.white,
    fontFamily: "Inter-600",
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh20,
  },
  description: {
    textAlign: "center",
    color: Colors.grayscale.gray_50,
    fontFamily: "Inter-500",
    fontSize: FontSize.fs12,
    lineHeight: LineHeight.lh16,
    letterSpacing: 0.2,
    paddingHorizontal: 20,
    marginTop: 24,
  },
  inputGroup: {
    gap: Gaps.g16,
    marginBottom: 40,
  },
  signInText: {
    textAlign: "center",
    color: Colors.white,
    marginBottom: 20,
    fontFamily: "Inter-400",
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh20,
    letterSpacing: 0.2,
  },
});
