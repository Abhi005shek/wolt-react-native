import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CategoryList from "../CategoryList";
import RestaurantList from "../RestaurantList";
import { Fonts } from "@/constants/theme";

function RestaurantListPage() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: insets.top + 60 }}
      >
        <Text style={styles.pageTitle}>Restaurants</Text>
        <CategoryList />

        <Text style={styles.allRestaurantsTitle}>All restaurants</Text>
        <RestaurantList />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitle: {
    fontFamily: Fonts.brandBlack,
    fontSize: 30,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  allRestaurantsTitle: {
    fontFamily: Fonts.brandBold,
    fontSize: 20,
     marginBottom: 16,
    paddingHorizontal: 16,
  },
});

export default RestaurantListPage;
