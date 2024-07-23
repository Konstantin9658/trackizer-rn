import { useEffect, useState } from "react";
import { Animated, Text } from "react-native";
import { ErrorNotificationProps } from "./types";
import { styles } from "./styles";

export const ErrorNotification = ({ error }: ErrorNotificationProps) => {
  const [isShown, setShown] = useState<boolean>(false);

  const animatedValue = new Animated.Value(-100);

  const onEnter = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (!error) return;

    const listener = () => setShown(false);

    setShown(true);

    const timerId = setTimeout(listener, 3000);

    return () => clearTimeout(timerId);
  }, [error]);

  if (!isShown) return null;

  return (
    <Animated.View
      onLayout={onEnter}
      style={{ ...styles.error, transform: [{ translateY: animatedValue }] }}
    >
      <Text style={styles.error_text}>{error}</Text>
    </Animated.View>
  );
};
