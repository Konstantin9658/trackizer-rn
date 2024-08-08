import { Platform } from "react-native";

export const cameraOffset = Platform.OS === "android" ? 40 : 20;
