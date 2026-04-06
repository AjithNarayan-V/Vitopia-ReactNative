import { View, Button, Alert } from "react-native";

export default function App() {
  const showAlert = () => {
    Alert.alert(
      "Delete Item",
      "Are you sure?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => console.log("Deleted") }
      ]
    );
  };

  return (
    <View>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
}