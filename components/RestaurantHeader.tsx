import { Colors } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface RestaurantHeaderProps {
  title: string;
  scrollOffset: SharedValue<number>;
}

const SCROLL_THRESHOLD = 60;

function RestaurantHeader({ title, scrollOffset }: RestaurantHeaderProps) {
  const insets = useSafeAreaInsets();

  const headerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [0, SCROLL_THRESHOLD * 0.6],
      [1, 0],
      Extrapolation.CLAMP
    );

    const translateY = interpolate(
      scrollOffset.value,
      [0, SCROLL_THRESHOLD * 0.6],
      [0, -10],
      Extrapolation.CLAMP
    );

    return {
      opacity,
      translateY,
    };
  });

  const header2Style = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [SCROLL_THRESHOLD * 0.3, SCROLL_THRESHOLD],
      [0, 1],
      Extrapolation.CLAMP
    );

    const translateY = interpolate(
      scrollOffset.value,
      [SCROLL_THRESHOLD * 0.3, SCROLL_THRESHOLD],
      [-10, 0],
      Extrapolation.CLAMP
    );

    return {
      opacity,
      translateY,
    };
  });

  const shadowStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [0, SCROLL_THRESHOLD],
      [0, 1],
      Extrapolation.CLAMP
    );
    return {
      shadowOpacity: opacity * 0.1,
      elevation: opacity * 4,
    };
  });

  return (
    <Animated.View style={[styles.headerContainer, { paddingTop: insets.top }, shadowStyle]}>
      {/* Header 1 */}
      <Animated.View style={[styles.header1, headerStyle]}>
        <Link href="/(app)/(auth)/(modal)/location" asChild>
          <TouchableOpacity style={styles.locationBtn}>
            <View style={styles.locationIcon}>
              <Ionicons name="business-outline" size={24} />
            </View>
            <Text style={styles.locationText}>Delhi</Text>
            <Ionicons name="chevron-down-outline" size={16} />
          </TouchableOpacity>
        </Link>

        <View style={styles.rightIcons}>
          <Link href="/(app)/(auth)/(modal)/filter" asChild>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="filter" size={20} />
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="map-outline" size={20} />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Header 2 */}
      <Animated.View style={[styles.header2, header2Style]}>
        <View style={styles.centerContent}>
          <Text style={styles.titleSmall}>{title}</Text>
          <Link href="/(app)/(auth)/(modal)/location" asChild>
            <TouchableOpacity style={styles.locationBtn}>
              <Text style={styles.locationSmallText}>Delhi</Text>
              <Ionicons name="chevron-down-outline" size={14} />
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.rightIcons}>
          <Link href="/(app)/(auth)/(modal)/filter" asChild>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="filter" size={20} />
            </TouchableOpacity>
          </Link>
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 100,
    // boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  header1: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 20,
  },
  locationText: {
    fontWeight: "600",
    fontSize: 14,
  },
  locationIcon: {
    borderRadius: 20,
    backgroundColor: Colors.light,
    padding: 10,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconBtn: {
    width: 40,
    height: 40,
    backgroundColor: Colors.light,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 40,
  },
  titleSmall: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 2,
  },
  locationSmall: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  locationSmallText: {
    fontSize: 12,
    color: Colors.muted,
  },
});

export default RestaurantHeader;
