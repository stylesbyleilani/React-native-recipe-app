import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Categories() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Categories</Text> */}
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>Beef</Text>
        <Text style={styles.category}>Seafood</Text>
        <Text style={styles.category}>Pork</Text>
        <Text style={styles.category}>Side</Text>
        <Text style={styles.category}>Dessert</Text>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,

        marginHorizontal:15,

    } ,
    category:{
        fontSize:19,
        color:"#656565",
        fontWeight:"500",
        fontStyle:"sans-serif",

    },
    header:{
        fontSize:20,
        color:"black",
        fontWeight:"bold"
    },
    categoryContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        // gap:40,
    }
})