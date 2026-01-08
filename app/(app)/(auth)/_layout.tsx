import { Stack } from "expo-router";

function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Feed" }} />
    </Stack>
  );
}

export default AuthLayout;
