import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationBar from '../components/Navbar'

export default function AddRecipeScreen() {
  return (
    <View style={styles.container}>
      <Text>AddRecipeScreen</Text>
      <NavigationBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})