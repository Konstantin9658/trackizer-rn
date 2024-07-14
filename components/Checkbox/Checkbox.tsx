import { Colors } from "@/constants/Colors";
import { styles } from "./styles";
import BouncyCheckbox, {
  BouncyCheckboxHandle,
} from "react-native-bouncy-checkbox";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { Routes } from "@/constants/Routes";
import { useRef } from "react";

export const Checkbox = () => {
  const bouncyCheckboxRef = useRef<BouncyCheckboxHandle | null>(null);

  const handlePressText = () => {
    if (bouncyCheckboxRef.current) {
      bouncyCheckboxRef.current.onCheckboxPress();
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.checkboxWrapper}>
        <BouncyCheckbox
          ref={bouncyCheckboxRef}
          size={25}
          fillColor={Colors.accent_primary.accent_p_100}
          disableText
          textStyle={styles.text}
          textContainerStyle={styles.textContainer}
          iconStyle={styles.icon}
          innerIconStyle={styles.innerIcon}
          onPress={(isChecked: boolean) => {
            console.log(isChecked);
          }}
        />
        <Text style={[styles.text, styles.textLabel]} onPress={handlePressText}>
          Remember me
        </Text>
      </View>
      <Link asChild href={Routes.index}>
        <Text style={styles.text}>Forgot password</Text>
      </Link>
    </View>
  );
};
