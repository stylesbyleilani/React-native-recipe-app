
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.ptag} >Hello jane</Text>
      <Text style={styles.what}>What would you like to cook today?</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
  marginTop:10,
  marginHorizontal:15,
    },
  ptag:{
    color:"gray",
    fontSize:16,
  },
  what:{
    fontSize:25,
    color:"black",
    fontWeight:"bold"
  }
})