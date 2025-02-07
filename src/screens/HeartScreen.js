

import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NavigationBar from '../components/Navbar'
import { TouchableOpacity } from 'react-native-web'

export default function HeartScreen({ route, navigation}) {
  const [savedRecipes, setSavedRecipes] = useState([])

  useEffect(() => {
    loadSavedRecipes()
  }, [])

  const loadSavedRecipes = async () => {
    try {
      const saved = await AsyncStorage.getItem('savedRecipes')
      if (saved) setSavedRecipes(JSON.parse(saved))
    } catch (error) {
      console.error('Error loading recipes:', error)
    }
  }

  if (savedRecipes.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.errormessage}>No saved recipes</Text>
        <NavigationBar/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={savedRecipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.recipeCard}>

          <TouchableOpacity 
          onPress={()=> navigation.navigate("MealShowSreen",{id: item.idMeal}) }>
            
            <Image 
              style={styles.thumbnail}
              source={{ uri: item.strMealThumb }}
            />
            <Text style={styles.recipeName}>{item.strMeal}</Text>
            <Text style={styles.category}>{item.strCategory}</Text>
          </TouchableOpacity>

          </View>
        )}
      />
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
  recipeCard: {
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: '#666',
  },
  errormessage: {
    alignSelf: "center",
    fontSize: 25,
    color: "red",
    fontWeight: "bold",
    marginHorizontal: 15,
  }
})