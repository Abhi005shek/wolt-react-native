import IonIcons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function GoogleButton() {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <IonIcons name="logo-google" size={23} color={"#fff"} />
      <Text style={styles.googleButtonText}>Continue with Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: "#4285F4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    gap: 4,
  },
  googleButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
