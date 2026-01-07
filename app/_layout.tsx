import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {Nunito_400Regular, Nunito_700Bold, Nunito_900Black} from '@expo-google-fonts/nunito';
import {useFonts} from "expo-font";

const queryClient = new QueryClient();
export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_900Black,
    
  });

  if(!fontsLoaded) return null;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Slot />;
        </GestureHandlerRootView>
      </QueryClientProvider>
    </>
  );
}
