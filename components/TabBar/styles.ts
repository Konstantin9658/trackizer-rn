import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    elevation: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
  },
  gradient: {
    position: "absolute",
    pointerEvents: "none",
    top: -50,
    minHeight: "100%",
    left: 0,
    right: 0,
    bottom: 0,
  },
  tabContainer: {
    position: "absolute",
    pointerEvents: "box-none",
    width: "100%",
    height: 152,
    elevation: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  tabBg: {
    position: "absolute",
  },
});
