import { Colors } from "@/constants/Colors";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { styles } from "./styles";
import { TrackizerLogo } from "@/components/Logo/Logo";
import { Button } from "@/components/Button/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { SubsInfo } from "./components/SubsInfo/SubsInfo";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]}>
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
                <Button
                  size="small"
                  variant="secondary"
                  text="See your budget"
                />
              </View>
            </>
          )}
        </AnimatedCircularProgress>
        <View style={styles.subs}>
          <SubsInfo type="active" value={12} />
          <SubsInfo type="highest" value={19.99} />
          <SubsInfo type="lowest" value={5.99} />
        </View>
      </SafeAreaView>
    </View>
  );
};
