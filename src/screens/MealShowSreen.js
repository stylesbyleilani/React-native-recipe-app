// import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import Octicons from '@expo/vector-icons/Octicons';
// import meal from '../api/meal';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import NavigationBar from '../components/Navbar';

// export default function MealShowSreen({route, navigation}) {
//   const [results, setResult] = useState(null)
//   const [isLiked, setIsLiked] = useState(false)

//   const { id } = route.params;
//   console.log(results)
//   const handlePress=()=>{
//     navigation.navigate("HeartScreen", {
//       recipe: results
//     })
//     console.log(results, "res")

//   }
//  const getSingleRecipe =  async ()=>{
//    try {
     
//      const res = await meal.get(`/lookup.php?i=${id}`)
//      setResult(res.data.meals[0]) // Get first meal from array
//     } catch (error) {
//       console.error("error getting recipe")
//     }
//  }

//  useEffect(()=>{
// getSingleRecipe()
//  }, [])

//  if (!results){
//   return null;
//  }
 


//  useEffect(() => {
//   checkIfSaved()
// }, [results])

// const checkIfSaved = async () => {
//   try {
//     const saved = await AsyncStorage.getItem('savedRecipes')
//     if (saved) {
//       const recipes = JSON.parse(saved)
//       setIsLiked(recipes.some(recipe => recipe.idMeal === results?.idMeal))
//     }
//   } catch (error) {
//     console.error('Error checking saved status:', error)
//   }
// }

// const handleHeartPress = async () => {
//   try {
//     const saved = await AsyncStorage.getItem('savedRecipes')
//     let recipes = saved ? JSON.parse(saved) : []
    
//     if (isLiked) {
//       recipes = recipes.filter(recipe => recipe.idMeal !== results.idMeal)
//     } else {
//       recipes.push(results)
//     }
    
//     await AsyncStorage.setItem('savedRecipes', JSON.stringify(recipes))
//     setIsLiked(!isLiked)
//   } catch (error) {
//     console.error('Error saving recipe:', error)
//   }
// }


// }


//   return (

//     <>
//         <View style={styles.container}>
//     <Image 
//       style={styles.image}
//       source={{ uri: results.strMealThumb }}
//     />
//     <View style={styles.pluswrapper}>

//     <TouchableOpacity onPress={handleHeartPress}>
//     <AntDesign 
//       name={isLiked ? "heart" : "hearto"} 
//       size={24} 
//       color={isLiked ? "red" : "black"} 
//     />
//   </TouchableOpacity>
//       {/* <TouchableOpacity 
//         style={styles.iconPlusButton} 
//         onPress={() => handlePress('heart')}
//       >
//         <AntDesign name="hearto" size={24} color="black" />
//         </TouchableOpacity> */}
// </View>

    
//      <FlatList
//       data={[results]} 
//       keyExtractor={item => item.idMeal}
//       renderItem={({ item }) => (
//         <View style={styles.whiteBg}>
//           <Text style={styles.titleHeader}>{results.strMeal}</Text>
//           <View style={styles.flex}>
//             <Text style={styles.area}>By {results.strArea}</Text>
//             <Text style={styles.area}>By {results.strCategory}</Text>
//           </View>
//           <Text style={styles.instuctions}>Instructions</Text>
//           <Text style={styles.area}>{results.strInstructions}</Text>

//           <Text style={styles.instuctions}>Ingridients</Text>

//           <View style={styles.wrapper}>
//           <View style={styles.ingridientList}>
//            <Text>1</Text>
//           </View>
//           <View style={styles.between}> 
//           <Text>{results.strIngredient1} </Text> 
//           <Text>{results.strMeasure1} </Text> 

//           </View>
//           </View>

//           <View style={styles.wrapper}>
//           <View style={styles.ingridientList}>
//            <Text>2</Text>
//           </View>
//           <View style={styles.between}> 
//           <Text>{results.strIngredient2} </Text> 
//           <Text>{results.strMeasure2} </Text> 

//           </View>
//           </View>

//           <View style={styles.wrapper}>
//           <View style={styles.ingridientList}>
//            <Text>3</Text>
//           </View>
//           <View style={styles.between}> 
//           <Text>{results.strIngredient3} </Text> 
//           <Text>{results.strMeasure3} </Text> 

//           </View>
//           </View>
//           <View style={styles.wrapper}>
//           <View style={styles.ingridientList}>
//            <Text>4</Text>
//           </View>
//           <View style={styles.between}> 
//           <Text>{results.strIngredient4} </Text> 
//           <Text>{results.strMeasure4} </Text> 

//           </View>
//           </View>
//           <View style={styles.wrapper}>
//           <View style={styles.ingridientList}>
//            <Text>5</Text>
//           </View>
//           <View style={styles.between}> 
//           <Text>{results.strIngredient5} </Text> 
//           <Text>{results.strMeasure5} </Text> 

//           </View>
//           </View>

// <View  style={styles.button}>

// <Octicons name="device-camera-video" size={24} color="white" />
// <Text style={styles.watch}> Watch Videos</Text>
// </View>
// </View>
//       )}
//     /> 
//     <NavigationBar/>
//     </View>
//   </>






//   )
// }

// const styles = StyleSheet.create({

// container: {
//   flex: 1,
//   flexDirection: 'column',
//   justifyContent: 'space-between',
// },

//   titleHeader:{
//     fontSize:18,
//     color:"black",   
//     fontWeight:"bold"
// },
// ingridientList:{
//   padding:3,
//   borderRadius:5,
//   backgroundColor:"#bbbbbb",
//   width:30,
//   alignItems:"center",
//   marginTop:3,

// },
// whiteBg:{  
//   backgroundColor: "white",
//   padding:20,
//   borderRadius:5,
//   flex:1,
  


// },
// pluswrapper:{
//   padding:7,
//   borderRadius:100,
//   backgroundColor:"#f7f7f7",
//   position: "absolute",
//   top: -2,
//   right:10,
//   marginTop:6,

  
  
//     },
// wrapper:{
//   flexDirection: "row",
//   gap:10,
//   alignItems:"center",
//   marginTop:20,   
//   flex: 1 
  
// },
// watch:{
//   color: "white",
//   fontSize:18,

// },
// button:{
//   backgroundColor:"#00ab41",
//   color:"white",
//   padding:5,
//   borderRadius:5,
//   alignItems: "center",
// alignSelf: "center",
// width:200,
// gap: 3,
//   flexDirection:"row",
//   fontSize:16,

// marginTop:5,
// justifyContent:"center",
//   flexDirection:"row",
//   // position: "absolute"

// },


// between:{
//   flexDirection:"row",
//   alignItems:"center",
//   justifyContent: "space-between",
//   flex: 1, 
//   paddingRight: 10 
// },
// instuctions:{
//   fontSize:22,
//   color:"black",
//   marginTop:3,
//   fontWeight:"bold"
// },

// image: {
//   width: "100%",
//   height: 400,
//   objectFit:"cover",
//   borderRadius: 6,
// },
// flex:{
//   flexDirection: "row",
//   gap:5,
//   color: "gray"
// },
// area:{
//   fontSize:12,
//   color:"#656565"
// },

// })



import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Octicons from '@expo/vector-icons/Octicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import meal from '../api/meal'
import AntDesign from '@expo/vector-icons/AntDesign'
import NavigationBar from '../components/Navbar'

export default function MealShowScreen({route, navigation}) {
  const [results, setResult] = useState(null)
  const [isLiked, setIsLiked] = useState(false)
  const { id } = route.params

  const getSingleRecipe = async () => {
    try {
      const res = await meal.get(`/lookup.php?i=${id}`)
      setResult(res.data.meals[0])
    } catch (error) {
      console.error("error getting recipe")
    }
  }

  const checkIfSaved = async () => {
    try {
      const saved = await AsyncStorage.getItem('savedRecipes')
      if (saved) {
        const recipes = JSON.parse(saved)
        setIsLiked(recipes.some(recipe => recipe.idMeal === results?.idMeal))
      }
    } catch (error) {
      console.error('Error checking saved status:', error)
    }
  }

  const handleHeartPress = async () => {
    try {
      const saved = await AsyncStorage.getItem('savedRecipes')
      let recipes = saved ? JSON.parse(saved) : []
      
      if (isLiked) {
        recipes = recipes.filter(recipe => recipe.idMeal !== results.idMeal)
      } else {
        recipes.push(results)
      }
      
      await AsyncStorage.setItem('savedRecipes', JSON.stringify(recipes))
      setIsLiked(!isLiked)
      
      // Navigate to HeartScreen with updated recipe
      navigation.navigate("HeartScreen", { recipe: results })
    } catch (error) {
      console.error('Error saving recipe:', error)
    }
  }

  useEffect(() => {
    getSingleRecipe()
  }, [])

  useEffect(() => {
    if (results) {
      checkIfSaved()
    }
  }, [results])

  if (!results) return null

  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{ uri: results.strMealThumb }}
      />
      <View style={styles.pluswrapper}>
        <TouchableOpacity onPress={handleHeartPress}>
          <AntDesign 
            name={isLiked ? "heart" : "hearto"} 
            size={24} 
            color={isLiked ? "red" : "black"} 
          />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={[results]}
        keyExtractor={item => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.whiteBg}>
            <Text style={styles.titleHeader}>{item.strMeal}</Text>
            <View style={styles.flex}>
              <Text style={styles.area}>By {item.strArea}</Text>
              <Text style={styles.area}>By {item.strCategory}</Text>
            </View>
            <Text style={styles.instuctions}>Instructions</Text>
            <Text style={styles.area}>{item.strInstructions}</Text>

            <Text style={styles.instuctions}>Ingredients</Text>
            {[1, 2, 3, 4, 5].map((num) => (
              <View key={num} style={styles.wrapper}>
                <View style={styles.ingridientList}>
                  <Text>{num}</Text>
                </View>
                <View style={styles.between}>
                  <Text>{item[`strIngredient${num}`]}</Text>
                  <Text>{item[`strMeasure${num}`]}</Text>
                </View>
              </View>
            ))}

            <View style={styles.button}>
              <Octicons name="device-camera-video" size={24} color="white" />
              <Text style={styles.watch}>Watch Videos</Text>
            </View>
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
  titleHeader: {
    fontSize: 18,
    color: "black",   
    fontWeight: "bold"
  },
  ingridientList: {
    padding: 3,
    borderRadius: 5,
    backgroundColor: "#bbbbbb",
    width: 30,
    alignItems: "center",
    marginTop: 3,
  },
  whiteBg: {  
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
    flex: 1,
  },
  pluswrapper: {
    padding: 7,
    borderRadius: 100,
    backgroundColor: "#f7f7f7",
    position: "absolute",
    top: -2,
    right: 10,
    marginTop: 6,
  },
  wrapper: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 20,   
    flex: 1 
  },
  watch: {
    color: "white",
    fontSize: 20,
    fontWeight:500,
  },
  button: {
    backgroundColor: "#00ab41",
    color: "white",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
    width: 200,
    height:45,
    gap: 5,
    flexDirection: "row",
    fontSize: 16,
    marginTop: 5,
    justifyContent: "center",
  },
  between: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    paddingRight: 10 
  },
  instuctions: {
    fontSize: 22,
    color: "black",
    marginTop: 3,
    fontWeight: "bold"
  },
  image: {
    width: "100%",
    height: 400,
    objectFit: "cover",
    borderRadius: 6,
  },
  flex: {
    flexDirection: "row",
    gap: 5,
    color: "gray"
  },
  area: {
    fontSize: 12,
    color: "#656565"
  },
})