import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AppleButton() {
  return (
    <TouchableOpacity style={styles.appleButton}>
      <Ionicons name="logo-apple" size={25} color={"#fff"} />
      <Text style={styles.appleButtonText}>Sign in with Apple</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appleButton: {
    backgroundColor: "#000000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    gap: 4,
  },
  appleButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
