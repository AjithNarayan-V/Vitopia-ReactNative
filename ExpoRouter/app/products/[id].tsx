import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router';

export default function ProductDetails() {
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Product Details</Text>
      <Text>ID: {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})