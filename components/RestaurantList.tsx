import { Colors } from "@/constants/theme";
import { useRestaurants } from "@/hooks/useRestaurants";
import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function RestaurantList() {
  const { data: restaurants, isLoading, error } = useRestaurants();

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size={"large"} color={Colors.secondary} />
      </View>
    );
  }

  return (
    <>
      {restaurants?.map((restaurant) => (
        <View key={restaurant.id}>
          <TouchableOpacity style={styles.card}>
            <Image source={restaurant.image!} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{restaurant.name}</Text>
              <Text style={styles.description}>{restaurant.description}</Text>
            </View>

            <View style={styles.metadata}>
              <Ionicons name="bicycle-outline" size={16} color={Colors.muted} />
              <Text style={styles.metadataText}>₹ {(Number(restaurant.deliveryFee)*90).toFixed(2)}</Text>
              <Text style={styles.dot}>&bull;</Text>
              <Text style={styles.metadataText}>₹₹₹₹</Text>
              <Text style={styles.dot}>&bull;</Text>
              <Ionicons name='happy-outline' size={16} color={Colors.muted} />
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.light,
    boxShadow: "0 4px 2px -2px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },

  description: {
    fontSize: 14,
    color: Colors.muted,
  },
  metadata: {
    borderTopColor: Colors.light,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 10,
  },
  metadataText: {
    fontSize: 13,
    color: Colors.muted,
  },
  dot: {
    fontSize: 13,
    color: Colors.muted,
  }
});

export default RestaurantList;
