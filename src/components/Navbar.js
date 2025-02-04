


import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
const NavigationBar = () => {
  const handlePress = (buttonName) => {
    console.log(`${buttonName} pressed`);
    // Add your navigation logic here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.iconButton} 
        onPress={() => handlePress('home')}
      >
<Ionicons name="home-outline" size={24} color="#656565" />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.iconButton}
        onPress={() => handlePress('plus')}
      >
        <AntDesign name="hearto" size={24} color="#656565" />
        </TouchableOpacity>

<View style={styles.pluswrapper}>
      <TouchableOpacity 
        style={styles.iconPlusButton} 
        onPress={() => handlePress('heart')}
      >
     <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>

</View>

      <TouchableOpacity 
        style={styles.iconButton} 
        onPress={() => handlePress('message')}
      >
        <AntDesign name="message1" size={24} color="#656565" />
      </TouchableOpacity>

<TouchableOpacity 
style={styles.iconButton} 
onPress={() => handlePress('message')}  
>
<AntDesign name="search1" size={24} color="#656565" />
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingVertical: 10,
    // borderTopWidth: 1,
    // borderTopColor: '#e0e0e0',
    height: 60,  // Fixed height for the navbar
  },
  iconButton: {
    padding: 5,
  },
  iconPlusButton:{
// padding:5,
// borderRadius:100,

  },
  pluswrapper:{
padding:7,
borderRadius:100,
backgroundColor:"#39e75f",
position: "absolute",
top: -10,

  },
});

export default NavigationBar;