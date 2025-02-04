

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import searchScreens from "./src/screens/searchScreens";
import MealShowSreen from './src/screens/MealShowSreen';
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
                <Stack.Screen 
          name="MealShowSreen" 
          component={MealShowSreen}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 