import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonComponent() {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log("iOS button clicked")}
      activeOpacity={0.75}
    >
      <Text style={styles.text}>iOS Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#eaf2ff",
    borderColor: "#1d4ed8",
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  text: {
    color: "#1d4ed8",
    fontSize: 16,
    fontWeight: "700",
  },
});
