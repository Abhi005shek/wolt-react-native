import useUserStore from "@/hooks/useUserStore";
import { Stack } from "expo-router";

const RootNav = () => {
  const { isGuest, user } = useUserStore();
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="index" options={{title: 'Profile', 
        headerLargeTitle: true,
        headerTransparent: true,
      }} />
    </Stack>
  );
};
export default RootNav;
