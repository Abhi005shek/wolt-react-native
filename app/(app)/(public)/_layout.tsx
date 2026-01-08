import { Stack } from "expo-router";

const RootNav = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Stack.Screen
        name="other-options"
        options={{
          headerShown: false,
          presentation: "formSheet",
          title: "",
          headerShadowVisible: false,
          sheetCornerRadius: 16,
          sheetAllowedDetents: [0.6],
        }}
      />
    </Stack>
  );
};
export default RootNav;
