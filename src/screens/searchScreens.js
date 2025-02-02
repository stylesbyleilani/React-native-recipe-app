
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import SearchBar from '../components/searchBar'
import meal from '../api/meal'
import React, { useState , useEffect} from 'react' 
import Header from '../components/Header'
// import useMeals from '../hooks/useMeals'
import Categories from '../components/Categories'
import MealList from '../components/MealList'
export default function searchScreens() {
  const [searchTerm, setSearchTerm] = useState("")
  // const [ results , errorMessage, mealApi] = useMeals()
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

const filterResultByCategory = (strCategory)=>{
  strCategory === "seafood" || "side" || "beef" || "pork"
  return results.filter(result => {
    return result.strCategory === strCategory;
  })    
  

}


  const mealApi = async ()=>{
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

useEffect(()=>{
  setSearchTerm("lamb")

mealApi()
}, [])

  return (
    < View style={styles.container}>
      <Header/>
              <SearchBar 
              searchTerm={searchTerm}
              onSearchTermChange={(newTerm)=> setSearchTerm(newTerm)}
              onSearchTermSubmit={mealApi}
              />
              <Categories/>

{/* <Text> we got{results.length} </Text> 
      {console.log(results, "results")} */}
{ errorMessage ?<Text style={styles.errormessage}>{errorMessage} </Text> : null}


              <ScrollView style={styles.scrollContainer}>
        <MealList 
          results={filterResultByCategory("Seafood")}  
          title="Seafood Specials"
        />
        <MealList 
          results={filterResultByCategory("Side")} 
          title="Delicious Side Dishes"
        />
        <MealList 
          results={filterResultByCategory("Beef")} 
          title="Beef Recipes"
        />
        <MealList 
          results={filterResultByCategory("Pork")} 
          title="Pork Favorites"
        />






</ScrollView>
   
    </View>  
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1, // Makes the root view take up the full screen
  },
  scrollContainer: {
    flex: 1, // Allows the ScrollView to take remaining space
  },

  errormessage:{
    alignSelf: "center",
    fontSize: 25,
    color:"red",
    fontWeight: "bold",
    marginHorizontal:15,
  }
})