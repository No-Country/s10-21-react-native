import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SavedRecipes from '../screens/SavedRecipes';
import Favorites from '../screens/Favorites';
import AddRecipe from '../screens/AddRecipe';
import { Ionicons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 

export type RootStackParamList = {
  Home:undefined;
  SavedRecipes:undefined;
  Favorites:undefined;
  AddRecipe:undefined
};

const Tab= createMaterialBottomTabNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Favorites" component={Favorites}   options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={24} color={color} />         
              ),
        }}  />
      <Tab.Screen name="SavedRecipes" component={SavedRecipes} options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color }) => (
              <Fontisto name="favorite" size={24} color={color} />          
              ),
        }} />
      <Tab.Screen name="AddRecipe" component={AddRecipe} options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-add-sharp" size={24} color={color} />
          ),
        }}/>
    </Tab.Navigator>
  </NavigationContainer>
  )
}