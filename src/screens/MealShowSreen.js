import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Octicons from '@expo/vector-icons/Octicons';
import meal from '../api/meal';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function MealShowSreen({route}) {
  const [results, setResult] = useState(null)
  const { id } = route.params;
  console.log(results)
 const getSingleRecipe =  async ()=>{
  
   
   
   try {
     
     const res = await meal.get(`/lookup.php?i=${id}`)
     setResult(res.data.meals[0]) // Get first meal from array
    } catch (error) {
      console.error("error getting recipe")
    }
 }



 useEffect(()=>{
getSingleRecipe()
 }, [])

 if (!results){
  return null;
 }
 

  return (


    <>
    <Image 
      style={styles.image}
      source={{ uri: results.strMealThumb }}
    />
    <View style={styles.pluswrapper}>
      <TouchableOpacity 
        style={styles.iconPlusButton} 
        onPress={() => handlePress('heart')}
      >
        <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>

</View>

    
     <FlatList
      data={[results]} 
      keyExtractor={item => item.idMeal}
      renderItem={({ item }) => (
        <View style={styles.whiteBg}>
          <Text style={styles.titleHeader}>{results.strMeal}</Text>
          <View style={styles.flex}>
            <Text style={styles.area}>By {results.strArea}</Text>
            <Text style={styles.area}>By {results.strCategory}</Text>
          </View>
          <Text style={styles.instuctions}>Instructions</Text>
          <Text style={styles.area}>{results.strInstructions}</Text>

          <Text style={styles.instuctions}>Ingridients</Text>

          <View style={styles.wrapper}>
          <View style={styles.ingridientList}>
           <Text>1</Text>
          </View>
          <View style={styles.between}> 
          <Text>{results.strIngredient1} </Text> 
          <Text>{results.strMeasure1} </Text> 

          </View>
          </View>

          <View style={styles.wrapper}>
          <View style={styles.ingridientList}>
           <Text>2</Text>
          </View>
          <View style={styles.between}> 
          <Text>{results.strIngredient2} </Text> 
          <Text>{results.strMeasure2} </Text> 

          </View>
          </View>

          <View style={styles.wrapper}>
          <View style={styles.ingridientList}>
           <Text>3</Text>
          </View>
          <View style={styles.between}> 
          <Text>{results.strIngredient3} </Text> 
          <Text>{results.strMeasure3} </Text> 

          </View>
          </View>
          <View style={styles.wrapper}>
          <View style={styles.ingridientList}>
           <Text>4</Text>
          </View>
          <View style={styles.between}> 
          <Text>{results.strIngredient4} </Text> 
          <Text>{results.strMeasure4} </Text> 

          </View>
          </View>
          <View style={styles.wrapper}>
          <View style={styles.ingridientList}>
           <Text>5</Text>
          </View>
          <View style={styles.between}> 
          <Text>{results.strIngredient5} </Text> 
          <Text>{results.strMeasure5} </Text> 

          </View>
          </View>

<View  style={styles.button}>

<Octicons name="device-camera-video" size={24} color="white" />
<Text style={styles.watch}> Watch Videos</Text>
</View>
</View>
      )}
    /> 
  </>






  )
}

const styles = StyleSheet.create({
  titleHeader:{
    fontSize:18,
    color:"black",   
    fontWeight:"bold"
},
ingridientList:{
  padding:3,
  borderRadius:5,
  backgroundColor:"#bbbbbb",
  width:30,
  alignItems:"center",
  marginTop:3,

},
whiteBg:{  
  backgroundColor: "white",
  padding:20,
  borderRadius:5,
  flex:1,
  


},
pluswrapper:{
  padding:7,
  borderRadius:100,
  backgroundColor:"#f7f7f7",
  position: "absolute",
  top: -2,
  right:10,
  marginTop:6,

  
  
    },
wrapper:{
  flexDirection: "row",
  gap:10,
  alignItems:"center",
  marginTop:20,   
  flex: 1 
  
},
watch:{
  color: "white",
  fontSize:18,

},
button:{
  backgroundColor:"#00ab41",
  color:"white",
  padding:5,
  borderRadius:5,
  alignItems: "center",
alignSelf: "center",
width:200,
gap: 3,
  flexDirection:"row",
  fontSize:16,

marginTop:5,
justifyContent:"center",
  flexDirection:"row",
  // position: "absolute"

},


between:{
  flexDirection:"row",
  alignItems:"center",
  justifyContent: "space-between",
  flex: 1, 
  paddingRight: 10 
},
instuctions:{
  fontSize:22,
  color:"black",
  marginTop:3,
  fontWeight:"bold"
},

image: {
  width: "100%",
  height: 400,
  objectFit:"cover",
  borderRadius: 6,
},
flex:{
  flexDirection: "row",
  gap:5,
  color: "gray"
},
area:{
  fontSize:12,
  color:"#656565"
},

})