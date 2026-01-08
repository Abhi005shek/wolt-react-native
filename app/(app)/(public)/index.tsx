import AppleButton from "@/components/auth/AppleAuthButton";
import GoogleButton from "@/components/auth/GoogleButton";
import SmoothInfiniteScroll from "@/components/SmoothInfiniteScroll";
import { Fonts } from "@/constants/theme";
import {LinearGradient} from 'expo-linear-gradient';
import { Link } from "expo-router";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
export default function Index() {
  const openWebBrowser = () => {
    Linking.openURL("https://www.youtube.com");
  };

  return (
    <View style={styles.container}>
      <View style={styles.infiniteScrollContainer}>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set1" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="up" iconSet="set2" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set3" />
        </View>
        <LinearGradient colors={['transparent', '#fff']} style={{
          position: 'absolute',
          height: 200,
          left: 0,
          bottom: 0,
          right: 0
        }} />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require("@/assets/images/wolt-logo.png")}
          style={styles.brandLogo}
        />
        <Animated.Text style={styles.tagLine} entering={FadeInDown}>
          Almost everything delivered
        </Animated.Text>

        {/* Login */}
        <View style={styles.buttonContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            <AppleButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <GoogleButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <Link href={"/(app)/(public)/other-options"} asChild>
            <TouchableOpacity style={styles.otherButton}>
              <Text style={styles.otherButtonText}>Other options</Text>
            </TouchableOpacity>
            </Link>
          </Animated.View>
        </View>

        <Animated.View
          style={styles.privacyContainer}
          entering={FadeInDown.delay(400)}
        >
          <Text style={styles.privacyText}>
            Please visit&nbsp;
            <Text style={styles.privacyLink} onPress={openWebBrowser}>
              Wolt Privacy Statement
            </Text>
            &nbsp;to learn about personal data processing at Wolt.
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    // paddingTop: 30,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  brandLogo: {
    width: "100%",
    height: 48,
    resizeMode: "contain",
    marginBottom: 20,
  },
  tagLine: {
    fontSize: 32,
    fontFamily: Fonts.brandBlack,
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 36,
  },
  buttonContainer: {
    gap: 12,
    width: "100%",
  },
  otherButton: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    gap: 4,
  },
  otherButtonText: {
    color: "#666",
    fontSize: 18,
    fontWeight: "bold",
  },

  privacyContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  privacyText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    lineHeight: 19,
  },
  privacyLink: {
    color: "#4285F4",
    textDecorationLine: "underline",
  },
  infiniteScrollContainer: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    position: "relative",
    overflow: "hidden",
  },
});
