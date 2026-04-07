import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})