import { BorderColor, Colors } from "@/constants/Colors";
import { FontSize, LineHeight } from "@/constants/Typography";
import {
	Pressable,
	PressableProps,
	Text,
	StyleSheet,
	Animated,
	GestureResponderEvent,
} from "react-native";

export type VariantButton = "blue" | "dark" | "light";

interface ButtonProps extends PressableProps {
	text: string;
	variant: VariantButton;
}

const styles = StyleSheet.create({
	button: {
		height: 48,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
		borderWidth: 1,
	},
	button_dark: {
		backgroundColor: Colors.black,
	},
	button_blue: {
		backgroundColor: Colors.blue,
		borderColor: BorderColor.blue,
	},
	button_light: {
		backgroundColor: Colors.white,
		color: Colors.white,
	},
	text: {
		color: Colors.white,
		fontFamily: "Inter-600",
		fontSize: FontSize.fs14,
		lineHeight: LineHeight.lh20,
		letterSpacing: 0.2,
	},
	text_dark: {
		color: Colors.black,
	},
});

export const Button = ({ text, variant, ...props }: ButtonProps) => {
	const animatedValue = new Animated.Value(100);

	const handlePressIn = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true,
		}).start();

		props.onPressIn && props.onPressIn(e);
	};

	const handlePressOut = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 100,
			useNativeDriver: true,
		}).start();

		props.onPressOut && props.onPressOut(e);
	};

	return (
		<Pressable {...props} onPressIn={handlePressIn} onPressOut={handlePressOut}>
			<Animated.View
				style={[
					styles.button,
					variant === "dark" && styles.button_dark,
					variant === "light" && styles.button_light,
					variant === "blue" && styles.button_blue,
				]}
			>
				<Text style={[styles.text, variant === "light" && styles.text_dark]}>{text}</Text>
			</Animated.View>
		</Pressable>
	);
};
