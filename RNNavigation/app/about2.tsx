import type { NavigationProp, RouteProp } from "@react-navigation/native";
import type { RootParamList } from "../navigation/RouteTypes";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  navigation: NavigationProp<RootParamList, "About2">;
  route: RouteProp<RootParamList, "About2">;
};

export default function About2({ navigation, route }: Props) {
  const budget = route.params?.budget ?? 0;
  const currency = route.params?.currency ?? "USD";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About 2</Text>
      <Text style={styles.body}>
        Budget: {currency} {budget}
      </Text>
      <Text style={styles.body}>
        This is the About 2 screen. Swap this text for your own content.
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
    backgroundColor: "#f0f8ff",
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
    backgroundColor: "#2b7a78",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
