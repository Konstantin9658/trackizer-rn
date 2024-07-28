import { View } from "react-native";
import { TrackizerLogo } from "../Logo/Logo";
import { ButtonBack } from "../ButtonBack/ButtonBack";
import { styles } from "./styles";

export const Header = () => {
  return (
    <View style={styles.wrapper}>
      <ButtonBack style={styles.buttonBack} />
      <TrackizerLogo width={146} height={24} />
    </View>
  );
};
