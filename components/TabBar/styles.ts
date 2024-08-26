import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    bottom: 0,
    flex: 1,
  },
  gradient: {
    position: "absolute",
    pointerEvents: "none",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  tabContainer: {
    width: "100%",
    maxWidth: 329,
    margin: "auto",
    height: 55,
    flexDirection: "row",
    alignItems: "center",
  },
  tabBg: {
    position: "absolute",
  },
  tabButton: {
    width: 65.8,
    alignItems: "center",
  },
});
