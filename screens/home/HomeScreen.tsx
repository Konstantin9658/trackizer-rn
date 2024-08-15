import { Colors } from "@/constants/Colors";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { styles } from "./styles";
import { TrackizerLogo } from "@/components/Logo/Logo";
import { Button } from "@/components/Button/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { SubsInfo } from "./components/SubsInfo/SubsInfo";
import { SubsType } from "./components/SubsInfo/types";
import { Tabs } from "./components/Tabs/Tabs";
import { SubsCard } from "./components/SubsCard/SubsCard";
import { SUBSCRIPTIONS } from "./consts";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";

export const HomeScreen = () => {
  return (
    <GestureHandlerRootView>
      {/* <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}> */}
      <FlatList
        ListHeaderComponent={
          <>
            <SafeAreaView edges={["top"]} style={styles.container}>
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
                <SubsInfo type={SubsType.Active} value={12} />
                <SubsInfo type={SubsType.Highest} value={19.99} />
                <SubsInfo type={SubsType.Lowest} value={5.99} />
              </View>
            </SafeAreaView>
            <View style={styles.wrapper}>
              <Tabs />
            </View>
          </>
        }
        ListFooterComponent={<SafeAreaView edges={["bottom"]} />}
        data={SUBSCRIPTIONS}
        renderItem={({ item, index }) => (
          <View style={styles.cards}>
            <SubsCard item={item} key={`subs-${item.name}-${index}`} />
          </View>
        )}
      >
        {/* <SafeAreaView edges={["bottom"]} style={styles.wrapper}>
        <Tabs />
        <View style={styles.cards}>
          {SUBSCRIPTIONS.map((item, i) => (
            <SubsCard item={item} key={`subs-${item.name}-${i}`} />
          ))}
        </View>
      </SafeAreaView> */}
      </FlatList>
      {/* </SafeAreaView> */}
    </GestureHandlerRootView>
  );
};
