import { IconMinus } from "@/assets/Icons/IconMinus";
import { IconPlus } from "@/assets/Icons/IconPlus";
import { Button } from "@/components/Button/Button";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { CounterProps } from "./types";
import { NewSubsFormData } from "../../types";
import { ControllerRenderProps } from "react-hook-form";

export const Counter = (props: CounterProps) => {
  const { hasError, field, setValue, ...rest } = props;

  const handleChangeText =
    (field: ControllerRenderProps<NewSubsFormData, "price">) =>
    (text: string) => {
      field.onChange();

      if (!isNaN(Number(text))) {
        setValue("price", parseInt(text));
      }
    };

  const handleIncrement = () => {
    setValue("price", ++field.value);
  };

  const handleDecrement = () => {
    if (field.value === 0) return;
    setValue("price", --field.value);
  };

  return (
    <View style={styles.container}>
      <Button iconOnly variant="secondary" onPress={handleDecrement}>
        <IconMinus />
      </Button>
      <View style={styles.price}>
        <Text style={styles.label}>Monthly price</Text>
        <TextInput
          {...rest}
          style={[styles.input, hasError && styles.input_error]}
          value={`$${field.value}`}
          inputMode="decimal"
          keyboardType="numbers-and-punctuation"
          onChangeText={handleChangeText(field)}
          placeholder="$0"
        />
      </View>
      <Button iconOnly variant="secondary" onPress={handleIncrement}>
        <IconPlus />
      </Button>
    </View>
  );
};
