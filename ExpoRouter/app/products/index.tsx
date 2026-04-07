import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const index = () => {
  return (
    <View>
      <Text>Product List</Text>
        <Link
          href={{ pathname: "/products/[id]", params: { id: "1" } }}
          asChild
        >
          <Text>Go to Product 1</Text>
        </Link>
        <Link
          href={{ pathname: "/products/[id]", params: { id: "2" } }}
          asChild
        >
          <Text>Go to Product 2</Text>
        </Link>
        <Link
          href={{
            pathname: "/products/[...id]",
            params: { id: ["electronics", "laptops"] },
          }}
          asChild
        >
          <Text>Go to Electronics, Laptops</Text>
        </Link>
      


    </View>
  )
}

export default index

const styles = StyleSheet.create({})