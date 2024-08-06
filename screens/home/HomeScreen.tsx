import { Colors } from "@/constants/Colors";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { styles } from "./styles";
import { ButtonSettings } from "@/components/ButtonSettings/ButtonSettings";
import { TrackizerLogo } from "@/components/Logo/Logo";
import { Button } from "@/components/Button/Button";
import { SafeAreaContainer } from "@/components/SafeAreaContainer/SafeAreaContainer";

interface SubsInfo {
  title: string;
  count: string | number;
  decorColor: string;
}

const subsInfo: SubsInfo[] = [
  {
    title: "Active subs",
    count: 12,
    decorColor: Colors.accent_primary.accent_p_50,
  },
  {
    title: "Highest subs",
    count: "$19.99",
    decorColor: Colors.primary.primary_100,
  },
  {
    title: "Lowest subs",
    count: "$5.99",
    decorColor: Colors.accent_secondary.accent_s_50,
  },
];

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaContainer edges={["top"]}>
        <ButtonSettings style={styles.settings} />
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
          {subsInfo.map(({ title, count, decorColor }, i) => (
            <View style={styles.subsBox} key={`subs-${i}`}>
              <View
                style={{
                  ...styles.subsBox_decor,
                  backgroundColor: decorColor,
                }}
              />
              <Text style={styles.text}>{title}</Text>
              <Text style={styles.count}>{count}</Text>
            </View>
          ))}
        </View>
      </SafeAreaContainer>
    </View>
  );
};
