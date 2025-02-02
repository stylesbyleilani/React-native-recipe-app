

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import searchScreens from "./src/screens/searchScreens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Search"
        screenOptions={{
          title: "my business"
        }}
      >
        <Stack.Screen 
          name="Search" 
          component={searchScreens} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// import {createAppContainer, createStackNavigator}  from "react-navigation"
// import { createStackC } from '@react-navigation/native-stack'

// import searchScreens from "./src/screens/searchScreens"

// const navigator = createStackNavigator(
//     {
//   Search : searchScreens,
  
// },
// {
//     initialRouteName:"Search",
//     defaultNavigationOptions:{
//         title: "my business"
//     },
// }
// )
// export default createAppContainer(navigator)