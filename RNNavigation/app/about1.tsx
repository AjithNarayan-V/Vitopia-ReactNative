import type { NavigationProp, RouteProp } from "@react-navigation/native";
import type { RootParamList } from "../navigation/RouteTypes";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  navigation: NavigationProp<RootParamList, "About1">;
  route: RouteProp<RootParamList, "About1">;
};

export default function About1({ navigation, route }: Props) {
  const username = route.params?.username ?? "Friend";
  const mood = route.params?.mood;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About 1</Text>
      <Text style={styles.body}>Hello, {username}.</Text>
      {mood ? <Text style={styles.body}>Mood: {mood}</Text> : null}
      <Text style={styles.body}>
        This is the About 1 screen. Add any details or content you want here.
      </Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Back to Home</Text>
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
    backgroundColor: "#fff4f0",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    color: "#5b5b68",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    minWidth: 200,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#ff6b35",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
