import { Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    maxWidth: 328,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.grayscale.gray_70,
    paddingVertical: 12,
    paddingRight: 17,
    paddingLeft: 12,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  service: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  text: {
    color: Colors.white,
    fontFamily: "Inter-600",
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh20,
  },
  image_date: {
    backgroundColor: Colors.grayscale.gray_70,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    fontFamily: "Inter-500",
    fontSize: FontSize.fs10,
    letterSpacing: 0.2,
    color: Colors.grayscale.gray_30,
  },
  date_day: {
    fontFamily: "Inter-600",
    fontSize: FontSize.fs14,
    color: Colors.grayscale.gray_30,
  },
});
