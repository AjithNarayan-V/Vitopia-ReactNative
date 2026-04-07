import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonComponent() {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log("Android button clicked")}
      activeOpacity={0.85}
    >
      <Text style={styles.text}>Android Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#166534",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    elevation: 3,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
