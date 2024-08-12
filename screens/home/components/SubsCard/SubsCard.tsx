import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { ISubscriptions } from "../../types";
import { FilterValue } from "../Tabs/types";
import { useAtom } from "jotai";
import { currentFilter } from "@/store/home";

export const SubsCard = ({ item }: { item: ISubscriptions }) => {
  const [activeFilter] = useAtom(currentFilter);

  return (
    <View style={styles.card}>
      <View style={styles.service}>
        {activeFilter === FilterValue.Subscriptions ? (
          <Image style={styles.image} source={item.image} />
        ) : (
          <View style={[styles.image, styles.image_date]}>
            <Text style={styles.date}>{item.writeOffDay?.month}</Text>
            <Text style={styles.date_day}>{item.writeOffDay?.day}</Text>
          </View>
        )}
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <Text style={styles.text}>${item.bill}</Text>
    </View>
  );
};
