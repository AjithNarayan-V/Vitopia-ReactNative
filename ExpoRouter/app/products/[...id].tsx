import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router';

export default function CatchAllParams() {
    const { id } = useLocalSearchParams<{ id: string[] }>();
  return (
    <View>
      <Text>Product Details</Text>
      <Text>Product uri {id.join('/')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})