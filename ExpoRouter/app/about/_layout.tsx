import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.HeaderContainer}>
        <Text>Header</Text>
      </View>
      <Stack />
      <View style={styles.FooterContainer}>
        <Text>Footer</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  HeaderContainer:{
    height: 50,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center"
  },
  FooterContainer:{
    height: 50,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center"
  }
})
