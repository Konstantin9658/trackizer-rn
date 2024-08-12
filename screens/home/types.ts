import { ImageSourcePropType } from "react-native";

export interface ISubscriptions {
  image: ImageSourcePropType;
  name: string;
  bill: number;
  writeOffDay?: {
    month: string;
    day: number;
  };
}
