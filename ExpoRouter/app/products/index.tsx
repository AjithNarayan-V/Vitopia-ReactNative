import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const index = () => {
  return (
    <View>
      <Text>Product List</Text>
        <Link href={{ pathname: "/products/[id]", params: { id: "1" } }}>
          Go to Product 1
        </Link>
        <Link href={{ pathname: "/products/[id]", params: { id: "2" } }}>
          Go to Product 2
        </Link>
        <Link href={{ pathname: "/products/[...id]", params: { id: ["electronics", "laptops"] } }}> 
            Go to Electronics , Laptops 
        </Link>
      


    </View>
  )
}

export default index

const styles = StyleSheet.create({})