// always use rnfs


import { TextInput, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'
import {Feather} from  "@expo/vector-icons"


export default function searchBar({searchTerm, onSearchTermSubmit, onSearchTermChange}) {
  return (
    <View style={styles.container}>
    <Feather name='search'
    onPress={onSearchTermSubmit}
     style={styles.iconStyle}
      />
      
    <TextInput 
    autoCorrect={false}
    autoCapitalize='none'
    value={searchTerm}
    outLine="none"
    onEndEditing={onSearchTermSubmit}
    onChangeText={  onSearchTermChange}
    style={styles.textinput} placeholder='search'/>

  </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        backgroundColor:"#cefad0",
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection: "row",

    } ,
    textinput:{
flex:1,
fontSize:18,
outLine:"none"


    },
    iconStyle:{
        fontSize:25,
        alignSelf:"center",
        marginHorizontal:15,
        color:"#008631"

    }
})