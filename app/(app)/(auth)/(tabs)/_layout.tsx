import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarLabelStyle: { fontSize: 11, fontWeight: '600'}
    }}>
      <Tabs.Screen
        name="restaurants"
        options={{ title: "Restaurants", headerShown: false, tabBarIcon: ({color, size}) => <MaterialIcons name="restaurant" size={size} color={color} /> }}
      />
      <Tabs.Screen name="discovery" options={{ title: "Discovery", tabBarIcon: ({color, size}) => <MaterialIcons name="explore" size={size} color={color} /> }} />
      <Tabs.Screen
        name="stores"
        options={{ title: "Stores", headerShown: false,
          tabBarIcon: ({color, size}) => <MaterialIcons name="store" size={size} color={color} />
         }}
      />
      <Tabs.Screen name="search" options={{ title: "Search", tabBarIcon: ({color, size}) => <MaterialIcons name="search" size={size} color={color} /> }} />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false, tabBarIcon: ({color, size}) => <MaterialIcons name="person" size={size} color={color} /> }}
      />
    </Tabs>
  );
}
