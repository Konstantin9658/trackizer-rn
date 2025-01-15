import { ControllerRenderProps, UseFormSetValue } from "react-hook-form";
import { TextInputProps } from "react-native";
import { NewSubsFormData } from "../../types";

export interface CounterProps extends TextInputProps {
  hasError: boolean;
  field: ControllerRenderProps<NewSubsFormData, "price">;
  setValue: UseFormSetValue<NewSubsFormData>;
}
