import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontSize, LineHeight } from "@/constants/Typography";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { Routes } from "@/constants/Routes";
import { Gaps } from "@/constants/Gaps";

const styles = StyleSheet.create({
	text: {
		color: Colors.white,
		textAlign: "center",
		fontFamily: "Inter-400",
		fontSize: FontSize.fs14,
		lineHeight: LineHeight.lh20,
		letterSpacing: 0.2,
		paddingHorizontal: 27,
	},
	image: {
		margin: "auto",
		// marginTop: 59,
		position: "relative",
	},
	decor_left: {
		position: "absolute",
		top: 60,
		left: 0,
	},
	decor_right: {
		position: "absolute",
		right: 0,
		top: 336,
	},
	decor_highlight: {
		position: "absolute",
		top: 203,
		right: 0,
		zIndex: -1,
	},
	group_button: {
		marginTop: 40,
		gap: Gaps.g16,
		width: "100%",
		paddingHorizontal: 26,
	},
});

export const Welcome = () => {
	const sourceDecorLeft = require("../assets/images/Welcome/welcome-decor-left.png");
	const sourceDecorRight = require("../assets/images/Welcome/welcome-decor-right.png");
	const sourceHighlight = require("../assets/images/Welcome/welcome-highlight.png");
	const sourceImage = require("../assets/images/Welcome/welcome.png");

	return (
		<>
			<Image style={styles.decor_left} source={sourceDecorLeft} />
			<Image style={styles.decor_right} source={sourceDecorRight} resizeMode="cover" />
			<Image style={styles.decor_highlight} source={sourceHighlight} resizeMode="cover" />
			<Image style={styles.image} source={sourceImage} resizeMode="cover" />
			<Text style={styles.text}>
				Congue malesuada in ac justo, a tristique leo massa. Arcu leo leo urna risus.
			</Text>
			<View style={styles.group_button}>
				<ButtonLink route={Routes.register} variant="primary" text="Get started" />
				<ButtonLink route={Routes.login} variant="secondary" text="I have an account" />
			</View>
		</>
	);
};
