import useUserStore from "@/hooks/useUserStore";
import { Stack } from "expo-router";

const RootNav = () => {
  const { isGuest, user } = useUserStore();
  return (
    <Stack>
        <Stack.Screen name="index" options={{ }} />
    </Stack>
  );
};
export default RootNav;
