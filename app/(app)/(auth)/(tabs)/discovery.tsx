import useUserStore from "@/hooks/useUserStore";
import { Button, Text, View } from "react-native";

function Page() {
  const { setIsGuest } = useUserStore();
  return (
    <View>
      <Text>My Inside page</Text>
      <Button title="Go to Login" onPress={() => setIsGuest(false)} />
    </View>
  );
}

export default Page;
