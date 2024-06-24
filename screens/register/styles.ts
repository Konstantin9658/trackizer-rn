import { Colors } from "@/constants/Colors";
import { Gaps } from "@/constants/Gaps";
import { FontSize, LineHeight } from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	wrapper: {
		paddingHorizontal: 26,
		marginTop: "auto",
	},
	button_group: {
		marginTop: "auto",
		gap: Gaps.g16,
	},
	separate: {
		textAlign: "center",
		marginVertical: 40,
		color: Colors.white,
		fontFamily: "Inter-600",
		fontSize: FontSize.fs14,
		lineHeight: LineHeight.lh20,
	},
	description: {
		textAlign: "center",
		color: Colors.grayscale.gray_50,
		fontFamily: "Inter-500",
		fontSize: FontSize.fs12,
		lineHeight: LineHeight.lh16,
		letterSpacing: 0.2,
		paddingHorizontal: 20,
	},
	button_email: {
		marginBottom: 24,
	},
});
