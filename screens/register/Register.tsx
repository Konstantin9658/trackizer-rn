import { View, Text } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button/Button";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { Routes } from "@/constants/Routes";

export const RegisterScreen = () => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.button_group}>
				<Button variant="dark" text="Sign up with Apple" />
				<Button variant="light" text="Sign up with Google" />
				<Button variant="blue" text="Sign up with Facebook" />
			</View>
			<Text style={styles.separate}>or</Text>
			<View>
				<ButtonLink
					style={styles.button_email}
					route={Routes.register_email}
					variant="secondary"
					text="Sign up with E-mail"
				/>
				<Text style={styles.description}>
					By registering, you agree to our Terms of Use. Learn how we collect, use and share your
					data.
				</Text>
			</View>
		</View>
	);
};
