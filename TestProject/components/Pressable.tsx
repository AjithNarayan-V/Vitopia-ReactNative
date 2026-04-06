import { Pressable, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <Pressable
      onPress={() => console.log("Pressed")}
      onLongPress={() => console.log("Long Press")}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? "gray" : "blue" },
      ]}
    >
      <Text style={styles.text}>Click Me</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});