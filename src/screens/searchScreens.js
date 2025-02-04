


import { Text, StyleSheet, View, ScrollView } from 'react-native'
import SearchBar from '../components/searchBar'
import meal from '../api/meal'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import MealList from '../components/MealList'
import NavigationBar from '../components/Navbar'

export default function searchScreens({ navigation }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  const filterResultByCategory = (strCategory) => {
    return results.filter(result => {
      return result.strCategory === strCategory;
    })
  }

  const mealApi = async () => {
    try {
      const res = await meal.get("/search.php", {
        params: {
          s: searchTerm
        }
      })
      const data = res.data
      setResults(data.meals || [])
    } catch (error) {
      setErrorMessage(`error loading data : ${error.errorMessage}`)
    }
  }

  useEffect(() => {
    setSearchTerm("lamb")
    mealApi()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Header />
        <SearchBar
          searchTerm={searchTerm}
          onSearchTermChange={(newTerm) => setSearchTerm(newTerm)}
          onSearchTermSubmit={mealApi}
        />
        <Categories />

        {errorMessage ? <Text style={styles.errormessage}>{errorMessage}</Text> : null}

        <ScrollView style={styles.scrollContainer}>
          <MealList
            results={filterResultByCategory("Seafood")}
            title="Seafood Specials"
            navigation={navigation}
          />
          <MealList
            results={filterResultByCategory("Side")}
            title="Delicious Side Dishes"
            navigation={navigation}
          />
          <MealList
            results={filterResultByCategory("Beef")}
            title="Beef Recipes"
            navigation={navigation}
          />
          <MealList
            results={filterResultByCategory("Pork")}
            title="Pork Favorites"
            navigation={navigation}
          />
        </ScrollView>
      </View>
      <NavigationBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    marginBottom: 60, 
  },
  scrollContainer: {
    flex: 1,
  },
  errormessage: {
    alignSelf: "center",
    fontSize: 25,
    color: "red",
    fontWeight: "bold",
    marginHorizontal: 15,
  }
})