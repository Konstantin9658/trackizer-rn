import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { Dimensions, StyleSheet } from "react-native";

export const inputStyles = StyleSheet.create({
  input: {
    borderRadius: 16,
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: Colors.grayscale.gray_70,
    color: Colors.white,
    fontSize: FontSize.fs16,
    lineHeight: LineHeight.lh20,
    paddingHorizontal: 20,
  },
  wrapper: {},
  label: {
    fontFamily: "Inter-500",
    fontSize: FontSize.fs16,
    lineHeight: LineHeight.lh20,
    color: Colors.grayscale.gray_50,
    marginBottom: 4,
  },
  passLevel: {
    width: "100%",
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 3,
  },
  passLevelBox: {
    backgroundColor: Colors.grayscale.gray_70,
    width: Dimensions.get("screen").width / 5 + 5,
    height: 5,
  },
  passLevelBoxFirst: {
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
  },
  passLevelBoxLast: {
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
  },
  passLevelDesription: {
    color: Colors.grayscale.gray_50,
    fontFamily: "Inter-500",
    fontSize: FontSize.fs12,
    lineHeight: LineHeight.lh16,
    letterSpacing: 0.2,
    marginTop: 16,
  },
});
