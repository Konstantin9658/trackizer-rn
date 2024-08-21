import { Button } from "@/components/Button/Button";
import { TrackizerLogo } from "@/components/Logo/Logo";
import { Colors } from "@/constants/Colors";
import { View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { styles } from "./styles";

export const CircularProgress = () => {
  return (
    <AnimatedCircularProgress
      size={286}
      width={10}
      fill={75}
      style={styles.progress}
      childrenContainerStyle={styles.inner}
      tintColor={Colors.accent_primary.accent_p_100}
      lineCap="round"
      rotation={225}
      arcSweepAngle={270}
      backgroundColor="#31313D"
    >
      {() => (
        <>
          <TrackizerLogo width={107} height={19} />
          <Text style={styles.total}>$1,235</Text>
          <Text style={styles.text}>This months bills</Text>
          <View style={styles.button}>
            <Button size="small" variant="secondary" text="See your budget" />
          </View>
        </>
      )}
    </AnimatedCircularProgress>
  );
};
