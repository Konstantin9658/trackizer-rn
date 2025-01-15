import {
  Animated,
  FlatList,
  Image,
  KeyboardAvoidingView,
  LayoutChangeEvent,
  Platform,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { ButtonBack } from "@/components/ButtonBack/ButtonBack";
import { SUBSCRIPTIONS } from "../tabs/home/consts";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/Input/Input";
import { NewSubsFormData } from "./types";
import { router } from "expo-router";
import { Button } from "@/components/Button/Button";
import { Counter } from "./components/Counter/Counter";
import { flexible } from "@/styles/flex";

export const NewSubsScreen = () => {
  const [scrollViewWidth, setScrollViewWidth] = useState(0);

  const boxWidth = scrollViewWidth * 0.5;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;

  const pan = useRef(new Animated.ValueXY()).current;

  const onLayout = (e: LayoutChangeEvent) => {
    setScrollViewWidth(e.nativeEvent.layout.width);
  };

  const animatedEvent = Animated.event(
    [{ nativeEvent: { contentOffset: { x: pan.x } } }],
    { useNativeDriver: false },
  );

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<NewSubsFormData>({
    defaultValues: {
      description: "",
      price: 0,
    },
  });

  const onSubmit = (data: NewSubsFormData) => {
    console.log(data);
    router.back();
  };

  return (
    <KeyboardAvoidingView
      style={flexible.flex}
      contentContainerStyle={flexible.flex}
      behavior={Platform.OS === "ios" ? "position" : "height"}
    >
      <SafeAreaView edges={["bottom"]} style={styles.container}>
        <SafeAreaView style={styles.header}>
          <View>
            <ButtonBack style={styles.buttonBack} />
            <Text style={styles.headerTitle}>New</Text>
          </View>
          <Text style={styles.title}>Add new subscription</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={SUBSCRIPTIONS}
            contentInsetAdjustmentBehavior="never"
            snapToAlignment="center"
            decelerationRate="fast"
            automaticallyAdjustContentInsets={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={1}
            snapToInterval={boxWidth}
            contentInset={{
              left: halfBoxDistance,
              right: halfBoxDistance,
            }}
            contentOffset={{ x: halfBoxDistance * -1, y: 0 }}
            onLayout={onLayout}
            onScroll={animatedEvent}
            keyExtractor={(item, index) => `${index}-${item}`}
            renderItem={({ item, index }) => (
              <Animated.View
                style={{
                  transform: [
                    {
                      scale: pan.x.interpolate({
                        inputRange: [
                          (index - 1) * boxWidth - halfBoxDistance,
                          index * boxWidth - halfBoxDistance,
                          (index + 1) * boxWidth - halfBoxDistance,
                        ],
                        outputRange: [0.6, 1, 0.6],
                        extrapolate: "clamp",
                      }),
                    },
                  ],
                }}
              >
                <View style={[styles.subContainer, { width: boxWidth }]}>
                  <Image style={styles.subIcon} source={item.imgUrlThumbnail} />
                  <Text style={styles.subName}>{item.name}</Text>
                </View>
              </Animated.View>
            )}
          />
        </SafeAreaView>
        <View style={styles.content}>
          <Controller
            name="description"
            control={control}
            rules={{
              required: { value: true, message: "Required" },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message: "Only letters, numbers, and underscores allowed.",
              },
            }}
            render={({ field }) => (
              <Input
                value={field.value}
                keyboardType="ascii-capable"
                blurOnSubmit
                inputMode="text"
                hasError={!!errors.description}
                errorMessage={errors.description?.message}
                onChangeText={field.onChange}
                label="Description"
                variant="center"
                labelSize="small"
              />
            )}
          />
          <Controller
            name="price"
            control={control}
            rules={{
              required: true,
              min: 1,
              max: Number.MAX_SAFE_INTEGER,
            }}
            render={({ field }) => (
              <Counter
                setValue={setValue}
                field={field}
                hasError={!!errors.price}
              />
            )}
          />

          <Button
            onPress={handleSubmit(onSubmit)}
            variant="primary"
            text="Add this platform"
            style={styles.submit}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
