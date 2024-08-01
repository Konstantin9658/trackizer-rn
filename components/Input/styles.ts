import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    borderRadius: 16,
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: Colors.grayscale.gray_70,
    position: "relative",
    color: Colors.white,
    fontSize: FontSize.fs16,
    lineHeight: LineHeight.lh20,
    paddingHorizontal: 20,
  },
  input_error: {
    borderColor: Colors.red,
  },
  label: {
    fontFamily: "Inter-500",
    fontSize: FontSize.fs16,
    lineHeight: LineHeight.lh20,
    color: Colors.grayscale.gray_50,
    marginBottom: 4,
  },
  label_centered: {
    textAlign: "center",
  },
});
