import useUserStore from "@/hooks/useUserStore";
import { Stack } from "expo-router";

const RootNav = () => {
  const { isGuest, user } = useUserStore();
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: "white" } }}>
      <Stack.Screen name="index" options={{headerShown: false}} />
    </Stack>
  );
};
export default RootNav;
