import { View } from "react-native";
import { CircularProgress } from "../CircularProgress/CircularProgress";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { SubsInfo } from "../SubsInfo/SubsInfo";
import { Tabs } from "../Tabs/Tabs";
import { SubsType } from "../SubsInfo/types";

export const HeaderComponent = () => {
  return (
    <>
      <SafeAreaView edges={["top"]} style={styles.container}>
        <CircularProgress />
        <View style={styles.subs}>
          <SubsInfo type={SubsType.Active} value={12} />
          <SubsInfo type={SubsType.Highest} value={19.99} />
          <SubsInfo type={SubsType.Lowest} value={5.99} />
        </View>
      </SafeAreaView>
      <Tabs />
    </>
  );
};
