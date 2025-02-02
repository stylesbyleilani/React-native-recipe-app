import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import MealDetails from './MealDetails'

export default function MealList({title, results}) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleHeader}> {title}</Text>
      <FlatList 
      horizontal
      data={results}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(result)=> result.idMeal  }
      renderItem={({item})=>{
          
        return  (
            <MealDetails mealResult={item} /> 


        

        )
      }}
      
      />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginHorizontal:15,

    } ,


    titleHeader:{
        fontSize:18,
        color:"black",
        fontWeight:"bold"
    },
    image: {
        width: 170,
        height: 150,
        borderRadius: 8,
        // marginBottom: 5,
    },

    titleName:{
        fontSize:19,
        color:"Black",
        fontWeight:"bold"
    },
    Ingredient:{
        fontSize:10,
        color:"pink",
        fontWeight:"bold"
    },
    category:{
        fontSize:10,
        color:"green",
        fontWeight:"bold"
    },
})