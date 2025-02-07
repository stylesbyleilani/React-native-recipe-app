

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import searchScreens from "./src/screens/searchScreens";
import MealShowSreen from './src/screens/MealShowSreen';
import HeartScreen from './src/screens/HeartScreen';
import AddRecipeScreen from './src/screens/AddRecipeScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Search"
        screenOptions={{
          title: "my recipe"
        }}
      >
        <Stack.Screen 
          name="Search" 
          component={searchScreens}  
        />
                <Stack.Screen 
          name="MealShowSreen" 
          component={MealShowSreen}  
        />
        <Stack.Screen
        name="HeartScreen"
        component={HeartScreen}
        />
                <Stack.Screen
        name="AddRecipeScreen"
        component={AddRecipeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 