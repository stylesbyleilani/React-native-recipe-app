import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
                {/* <Text style={styles.category}>{item.strCategory}</Text>
                <Text style={styles.Ingredient}>{item.strIngredient1}</Text> */}


export default function MealDetails({mealResult}) {
  return (
        <View style={styles.container}>
                <Image 
                  style={styles.image}
                  source={{ uri: mealResult.strMealThumb }}
                />
                <Text style={styles.titleName}>{mealResult.strMeal}</Text>
                <Text style={styles.area}>By {mealResult.strArea}</Text>

                
            </View>

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
        height: 130,
        borderRadius: 6,
    },

    titleName:{
        fontSize:19,
        color:"Black",
        fontWeight:"bold"
    },
    area:{
        fontSize:14,
        color:"amber",
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