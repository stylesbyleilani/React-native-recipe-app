// import { Text, StyleSheet, View, ScrollView } from 'react-native'
// import SearchBar from '../components/searchBar'
// import meal from '../api/meal'
// import React, { useState , useEffect} from 'react' 
// import Header from '../components/Header'
//  import Categories from '../components/Categories'
// import MealList from '../components/MealList'
// import NavigationBar from '../components/Navbar'
// export default function searchScreens({navigation}) {
  
//   const [searchTerm, setSearchTerm] = useState("")
//   const [results, setResults] = useState([])
//   const [errorMessage, setErrorMessage] = useState("")
//   console.log(results)

// const filterResultByCategory = (strCategory)=>{
//   strCategory === "seafood" || "side" || "beef" || "pork"
//   return results.filter(result => {
//     return result.strCategory === strCategory;
//   })    
  

// }


//   const mealApi = async ()=>{
//     try {
//       const res = await meal.get("/search.php", {
//         params: {
//           s: searchTerm
//         }  
//       })


//       const data = res.data
//       setResults(data.meals || [])
      
//     } catch (error) {
//         setErrorMessage(`error loading data : ${error.errorMessage}`)
//     }
//   }

// useEffect(()=>{
//   setSearchTerm("lamb")

// mealApi()
// }, [])

//   return (
//     < View style={styles.container}>
//       <Header/>
//               <SearchBar 
//               searchTerm={searchTerm}
//               onSearchTermChange={(newTerm)=> setSearchTerm(newTerm)}
//               onSearchTermSubmit={mealApi}
//               />
//               <Categories/>

// { errorMessage ?<Text style={styles.errormessage}>{errorMessage} </Text> : null}

//               <ScrollView style={styles.scrollContainer}>
//         <MealList 
//           results={filterResultByCategory("Seafood")}  
//           title="Seafood Specials"
//           navigation={navigation}
//         />
//         <MealList 
//           results={filterResultByCategory("Side")} 
//           title="Delicious Side Dishes"
//           navigation={navigation}

//         />
//         <MealList 
//           results={filterResultByCategory("Beef")} 
//           title="Beef Recipes"
//           navigation={navigation}

//         />
//         <MealList 
//           results={filterResultByCategory("Pork")} 
//           title="Pork Favorites"
//           navigation={navigation}

//         />






// </ScrollView>
// <NavigationBar/>
   
//     </View>  
//   )
// }

// const styles = StyleSheet.create({

//   container: {
//     flex: 1, // Makes the root view take up the full screen
//   },
//   scrollContainer: {
//     flex: 1, // Allows the ScrollView to take remaining space
//   },

//   errormessage:{
//     alignSelf: "center",
//     fontSize: 25,
//     color:"red",
//     fontWeight: "bold",
//     marginHorizontal:15,
//   }
// })





// import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
// import React from 'react'
// import MealDetails from './MealDetails'
// import { withNavigation } from 'react-navigation'

// const MealList = ({ title, navigation, results }) => {  // Fixed arrow function syntax
//   if (!results.length) {
//     return null; // Optional: don't render anything if there are no results
//   }

//   return (
//     <View style={styles.container}>  // Changed ScrollView to View
//       <Text style={styles.titleHeader}>{title}</Text>
//       <FlatList 
//         horizontal
//         data={results}
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(result) => result.idMeal}
//         renderItem={({ item }) => (
//           <TouchableOpacity 
//             onPress={() => navigation.navigate("MealShowSreen", { meal: item })}>  // Added meal data to navigation
//             <MealDetails mealResult={item} /> 
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 10,
//         marginHorizontal: 15,
//     },
//     titleHeader: {
//         fontSize: 18,
//         color: "black",
//         fontWeight: "bold",
//         marginBottom: 10,  // Added for better spacing
//     },
//     image: {
//         width: 170,
//         height: 150,
//         borderRadius: 8,
//     },
//     titleName: {
//         fontSize: 19,
//         color: "black",  // Fixed capitalization of "black"
//         fontWeight: "bold"
//     },
//     Ingredient: {
//         fontSize: 10,
//         color: "pink",
//         fontWeight: "bold"
//     },
//     category: {
//         fontSize: 10,
//         color: "green",
//         fontWeight: "bold"
//     },
// })

// export default withNavigation(MealList)
