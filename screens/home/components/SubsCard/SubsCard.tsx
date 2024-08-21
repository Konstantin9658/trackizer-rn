import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { ISubscriptions } from "../../types";
import { FilterValue } from "../Tabs/types";
import { useAtom } from "jotai";
import { currentFilter } from "@/store/home";
import { MONTHS } from "../../consts";

export const SubsCard = ({ item }: { item: ISubscriptions }) => {
  const [activeFilter] = useAtom(currentFilter);

  const { imgUrlThumbnail, writeOffDay, name, bill } = item;

  const parseWriteOffDay = new Date(writeOffDay);

  return (
    <View style={styles.card}>
      <View style={styles.service}>
        {activeFilter === FilterValue.subs ? (
          <Image style={styles.image} source={imgUrlThumbnail} />
        ) : (
          <View style={[styles.image, styles.image_date]}>
            <Text style={styles.date}>
              {MONTHS[parseWriteOffDay.getMonth()]}
            </Text>
            <Text style={styles.date_day}>{parseWriteOffDay.getDate()}</Text>
          </View>
        )}
        <Text style={styles.text}>{name}</Text>
      </View>
      <Text style={styles.text}>${bill}</Text>
    </View>
  );
};
