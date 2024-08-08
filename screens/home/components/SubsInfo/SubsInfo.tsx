import { View, Text } from "react-native";
import { styles } from "./styles";
import { SubsInfoProps, SubsInfoTitle } from "./types";

export const SubsInfo = (props: SubsInfoProps) => {
  const { value, type } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.decor, styles[`decor_${type}`]]} />
      <Text style={styles.text}>{SubsInfoTitle[type]}</Text>
      <Text style={styles.count}>
        {type !== "active" && "$"}
        {Math.round(value)}
      </Text>
    </View>
  );
};
