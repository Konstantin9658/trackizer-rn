import { View, Text, Image, Platform } from "react-native";
import { Routes } from "@/constants/Routes";
import { styles } from "./styles";
import { TrackizerLogo } from "@/components/Logo/Logo";
import { Button } from "@/components/Button/Button";
import { navigateTo } from "@/utils/common";
import { stylesContainer } from "@/styles/container";
import { SafeAreaContainer } from "@/components/SafeAreaContainer/SafeAreaContainer";

export const WelcomeScreen = () => {
  const sourceDecorLeft = require("../../assets/images/Welcome/welcome-decor-left.png");
  const sourceDecorRight = require("../../assets/images/Welcome/welcome-decor-right.png");
  const sourceHighlight = require("../../assets/images/Welcome/welcome-highlight.png");
  const sourceImage = require("../../assets/images/Welcome/welcome.png");

  const paddingTop = Platform.OS === "android" ? 40 : 20;
  return (
    <SafeAreaContainer style={styles.container}>
      <View style={{ ...stylesContainer.container, paddingTop }}>
        <TrackizerLogo width={178} height={29} />
        <Image style={styles.decor_left} source={sourceDecorLeft} />
        <Image
          style={styles.decor_right}
          source={sourceDecorRight}
          resizeMode="cover"
        />
        <Image
          style={styles.decor_highlight}
          source={sourceHighlight}
          resizeMode="cover"
        />
        <Image style={styles.image} source={sourceImage} resizeMode="cover" />
        <Text style={styles.text}>
          Congue malesuada in ac justo, a tristique leo massa. Arcu leo leo urna
          risus.
        </Text>
        <View style={styles.group_button}>
          <Button
            onPress={navigateTo(Routes.quickStart)}
            variant="primary"
            text="Get started"
          />
          <Button
            onPress={navigateTo(Routes.login)}
            variant="secondary"
            text="I have an account"
          />
        </View>
      </View>
    </SafeAreaContainer>
  );
};
