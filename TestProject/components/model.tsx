import { useState } from "react";
import { View, Text, Button, Modal } from "react-native";

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button title="Open Modal" onPress={() => setVisible(true)} />

      <Modal visible={visible} transparent animationType="slide">
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <View style={{ backgroundColor: "white", padding: 20 }}>
            <Text>Hello from Modal</Text>
            <Button title="Close" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}