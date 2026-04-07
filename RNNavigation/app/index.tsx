import type { NativeStackScreenProps } from "@react-navigation/stack";
import type { RootStackParamList } from "../App";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Index({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Choose a screen to view.</Text>

      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("About1", {
            username: "Alex",
            mood: "curious",
          })
        }
      >
        <Text style={styles.buttonText}>Go to About 1</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("About2", {
            budget: 1250,
            currency: "USD",
          })
        }
      >
        <Text style={styles.buttonText}>Go to About 2</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f7f7fb",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#5b5b68",
    marginBottom: 20,
  },
  button: {
    minWidth: 200,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#1e5eff",
    marginBottom: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
