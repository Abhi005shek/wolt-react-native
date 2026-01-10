import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

function AuthLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modal)/location"
        options={{
          headerShown: false,
          presentation: "formSheet",
          sheetAllowedDetents: [0.7],
          title: "",
          sheetCornerRadius: 16,
          headerShadowVisible: false,
          sheetGrabberVisible: true,
          headerRight: () => (
            <TouchableOpacity style={{padding: 4, borderRadius: 20,}}  onPress={() => router.dismiss()}>
              <Ionicons name="close" size={24} style={{ marginRight: 16 }} />
            </TouchableOpacity>
          )
        }}
      />

       <Stack.Screen
        name="(modal)/filter"
        options={{
          headerShown: false,
          presentation: "formSheet",
          sheetAllowedDetents: [0.8],
          title: "",
          sheetCornerRadius: 16,
          contentStyle: {backgroundColor: "white"},
          headerShadowVisible: false,
          sheetGrabberVisible: true,
          headerRight: () => (
            <TouchableOpacity style={{padding: 4, borderRadius: 20,}}  onPress={() => router.dismiss()}>
              <Ionicons name="close" size={24} style={{ marginRight: 16 }} />
            </TouchableOpacity>
          )
        }}
      />
    </Stack>
  );
}

export default AuthLayout;
