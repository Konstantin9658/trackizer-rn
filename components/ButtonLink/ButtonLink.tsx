import { Colors } from "@/constants/Colors";
import { Pressable, Text, Animated, GestureResponderEvent } from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles";
import { ButtonLinkProps } from "./types";

export const ButtonLink = ({ text, variant, route, ...props }: ButtonLinkProps) => {
	const animatedValue = new Animated.Value(100);

	const primaryAnimatedColor = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.accent_primary.accent_p_50, Colors.accent_primary.accent_p_100],
	});

	const secondaryAnimatedColor = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.grayscale.gray_80, "#323239"],
	});

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
		<Link href={route} asChild>
			<Pressable {...props} onPressIn={handlePressIn} onPressOut={handlePressOut}>
				<Animated.View
					style={[
						styles.link,
						variant === "primary" && {
							...styles.link_primary,
							backgroundColor: primaryAnimatedColor,
						},
						variant === "secondary" && {
							...styles.link_secondary,
							backgroundColor: secondaryAnimatedColor,
						},
					]}
				>
					<Text style={styles.text}>{text}</Text>
				</Animated.View>
			</Pressable>
		</Link>
	);
};
