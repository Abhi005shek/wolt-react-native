import { Colors } from "@/constants/theme";
import { categories } from "@/data/categories";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function CategoryList() {
  const renderCategory = ({ item }: { item: (typeof categories)[0] }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <View
        style={[
          styles.categoryImageContainer,
          { backgroundColor: item.backgroundColor },
        ]}
      >
        <Image source={item.image} style={styles.categoryImage} />
      </View>

      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryPlaces}>{item.placesCount} places</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.categoriesSection}>
      <View style={styles.categoriesHeader}>
        <Text style={styles.categoriesTitle}>CategoryList</Text>
        <TouchableOpacity style={styles.seeAllBtn}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesSection: {
    marginBottom: 24,
  },
  categoriesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 6,
  },
  seeAll: {
    fontSize: 14,
    color: Colors.secondary,
    fontWeight: "500",
  },
  seeAllBtn: {
    padding: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: Colors.primaryLight,
  },
  categoriesList: {
    gap: 12,
    paddingHorizontal: 16,
  },
  categoryCard: {
    width: 130,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
    marginVertical: 8,
    boxShadow: "0px 4px 2px -2px rgba(0,0,0,0.2)",
    elevation: 2,
  },
  categoryImageContainer: {
    padding: 12,
  },
  categoryImage: {
    width: 106,
    height: 106,
    borderRadius: 8,
  },
  categoryInfo: {
    padding: 12,
    backgroundColor: "white",
    paddingTop: 4,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.light,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 2,
  },
  categoryPlaces: {
    fontSize: 12,
    color: Colors.muted,
  },
});

export default CategoryList;
