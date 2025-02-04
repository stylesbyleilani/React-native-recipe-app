// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function Categories() {
//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.header}>Categories</Text> */}
//       <View style={styles.categoryContainer}>
//         <Text style={styles.category}>Beef</Text>
//         <Text style={styles.category}>Seafood</Text>
//         <Text style={styles.category}>Pork</Text>
//         <Text style={styles.category}>Side</Text>
//         <Text style={styles.category}>Dessert</Text>

//       </View>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container:{
//         marginTop:10,

//         marginHorizontal:15,

//     } ,
//     category:{
//         fontSize:19,
//         color:"#656565",
//         fontWeight:"500",
//         fontStyle:"sans-serif",

//     },
//     header:{
//         fontSize:20,
//         color:"black",
//         fontWeight:"bold"
//     },
//     categoryContainer:{
//         flexDirection:"row",
//         justifyContent:"space-between",
//         // gap:40,
//     }
// })



import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import meal from '../api/meal'

export default function Categories({ onCategorySelect }) {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
console.log(categories , "cat")
console.log(selectedCategory, "sel")
  const getCategories = async () => {
    try {
      const response = await meal.get('/categories.php')
      setCategories(response.data.categories)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  const renderCategory = ({ item }) => (
    <TouchableOpacity 
      onPress={() => {
        setSelectedCategory(item.strCategory)
        if (onCategorySelect) {
          onCategorySelect(item.strCategory)
        }
      }}
    >
      <Text 
        style={[
          styles.category,
          selectedCategory === item.strCategory && styles.selectedCategory
        ]}
      >
        {item.strCategory}
      </Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={item => item.idCategory}
        renderItem={renderCategory}
        contentContainerStyle={styles.categoryContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  category: {
    fontSize: 19,
    color: "#656565",
    fontWeight: "500",
    marginRight: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  selectedCategory: {
    color: "#000",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  categoryContainer: {
    paddingRight: 15,
  }
})