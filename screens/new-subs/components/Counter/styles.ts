import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },
  price: {
    flex: 1,
    alignItems: "center",
    maxWidth: 161,
    height: 100,
    paddingTop: 20,
  },
  label: {
    fontFamily: "Inter-600",
    fontSize: FontSize.fs12,
    lineHeight: LineHeight.lh16,
    color: Colors.grayscale.gray_40,
    textAlign: "center",
  },
  input: {
    borderBottomWidth: 1,
    flex: 1,
    width: "100%",
    height: 84,
    color: Colors.white,
    fontSize: FontSize.fs24,
    lineHeight: LineHeight.lh36,
    fontFamily: "Inter-700",
    textAlign: "center",
    borderBottomColor: Colors.grayscale.gray_70,
  },
  input_error: {
    borderBottomColor: Colors.red,
  },
});
