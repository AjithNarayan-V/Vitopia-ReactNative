import { Text, View } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Text>Home Screen</Text>
      <Link href="./about" asChild>
        <Text>Go to About</Text>
      </Link>
      <Link href="./profile" asChild>
        <Text>Go to Profile</Text>
      </Link>
      <Link href="./products" asChild>
        <Text>Go to Products</Text>
      </Link>
      <Link href="/about/not-found" asChild>
        <Text>Go to Custom Not Found</Text>
      </Link>
    </View>
  );
}
