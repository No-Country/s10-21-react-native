import React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { NavigationContainer } from "@react-navigation/native";

import AddRecipe from "../screens/AddRecipe";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { CategoriesScreen } from "../screens/CategoriesScreen";
import Favorites from "../screens/Favorites";
import { HomeStackScreen } from "./HomeStack";

export type RootStackParamList = {
  Home: undefined;
  SavedRecipes: undefined;
  Favorites: undefined;
  AddRecipe: undefined;
};

const Tab = createMaterialBottomTabNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: "Favorites",
            tabBarIcon: ({ color }) => (
              <Ionicons name="heart" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="SavedRecipes"
          component={CategoriesScreen}
          options={{
            tabBarLabel: "Categories",
            tabBarIcon: ({ color }) => (
              <Fontisto name="favorite" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AddRecipe"
          component={AddRecipe}
          options={{
            tabBarLabel: "Add",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-add-sharp" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
