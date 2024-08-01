import { Colors } from "@/constants/Colors";
import { styles } from "./styles";
import BouncyCheckbox, {
  BouncyCheckboxHandle,
} from "react-native-bouncy-checkbox";
import { View, Text } from "react-native";
import { useRef } from "react";
import { CheckboxProps } from "./types";

export const Checkbox = ({ label, ...props }: CheckboxProps) => {
  const bouncyCheckboxRef = useRef<BouncyCheckboxHandle | null>(null);

  const handlePressText = () => {
    if (bouncyCheckboxRef.current) {
      bouncyCheckboxRef.current.onCheckboxPress();
    }
  };

  return (
    <View style={styles.wrapper}>
      <BouncyCheckbox
        ref={bouncyCheckboxRef}
        size={25}
        fillColor={Colors.accent_primary.accent_p_100}
        disableText
        iconStyle={styles.icon}
        innerIconStyle={styles.innerIcon}
        {...props}
      />
      {label && (
        <Text
          suppressHighlighting
          style={styles.label}
          onPress={handlePressText}
        >
          {label}
        </Text>
      )}
    </View>
  );
};
