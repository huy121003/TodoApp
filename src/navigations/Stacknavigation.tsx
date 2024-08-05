import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddTodoScreen, HomeScreen } from "../screens";

const Stack = createNativeStackNavigator()

const Stacknavigation:React.FC = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Add" component={AddTodoScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Stacknavigation

