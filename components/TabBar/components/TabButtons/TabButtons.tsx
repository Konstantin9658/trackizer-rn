import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const TabButtons = (props: Omit<BottomTabBarProps, "insets">) => {
  const { state, descriptors, navigation, ...rest } = props;

  return state.routes.map((route, index) => {
    const { options } = descriptors[route.key];
    const isFocused = state.index === index;

    const icon =
      options.tabBarIcon !== undefined
        ? options.tabBarIcon({
            focused: isFocused,
            color: "",
            size: 0,
          })
        : options.title !== undefined
          ? options.title
          : route.name;

    const onPress = () => {
      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name, route.params);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: "tabLongPress",
        target: route.key,
      });
    };

    return (
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.button}
        key={`${state.key}-${route.name}`}
        {...rest}
      >
        {icon}
      </TouchableOpacity>
    );
  });
};
