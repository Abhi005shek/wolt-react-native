import useUserStore from "@/hooks/useUserStore";
import React from "react";
import { Button, Text, View } from "react-native";

function Page() {
  const { setIsGuest } = useUserStore();
  return (
    <View>
      <Text>My Inside page</Text>
      <Button title="Go to Login" onPress={() => setIsGuest(true)} />
    </View>
  );
}

export default Page;
