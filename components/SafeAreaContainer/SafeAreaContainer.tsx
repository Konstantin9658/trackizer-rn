import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaContainerProps } from "./types";

export const SafeAreaContainer = (props: SafeAreaContainerProps) => {
  const { children, ...rest } = props;
  return <SafeAreaView {...rest}>{children}</SafeAreaView>;
};
