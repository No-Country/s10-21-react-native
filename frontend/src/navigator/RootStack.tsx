import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { NavigationContainer } from '@react-navigation/native';

import AddRecipe from '../screens/AddRecipe';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { CategoriesScreen } from '../screens/CategoriesScreen';
import Favorites from '../screens/Favorites';
import HomeScreen from '../screens/home/Home';
export type RootStackParamList = {
	Home: undefined;
	SavedRecipes: undefined;
	Favorites: undefined;
	AddRecipe: undefined;
	AuthScreen: undefined;
};

const Tab = createMaterialBottomTabNavigator<RootStackParamList>();

export default function RootStack() {
	// get token from local storage
	// if token is not null, then render the app
	// else, render the AuthScreen

	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name='Home'
					component={HomeScreen}
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: ({ color }) => <Ionicons name='home' color={color} size={26} />,
					}}
				/>
				<Tab.Screen
					name='SavedRecipes'
					component={CategoriesScreen}
					options={{
						tabBarLabel: 'Categories',
						tabBarIcon: ({ color }) => <Fontisto name='favorite' size={24} color={color} />,
					}}
				/>
				<Tab.Screen
					name='Favorites'
					component={Favorites}
					options={{
						tabBarLabel: 'Favorites',
						tabBarIcon: ({ color }) => <Ionicons name='heart' size={24} color={color} />,
					}}
				/>

				<Tab.Screen
					name='AddRecipe'
					component={AddRecipe}
					options={{
						tabBarLabel: 'My Recipes',
						tabBarIcon: ({ color }) => <Ionicons name='list' size={24} color={color} />,
					}}
				/>
				<Tab.Screen
					name='User'
					component={AddRecipe}
					options={{
						tabBarLabel: 'Profile',
						tabBarIcon: ({ color }) => <Ionicons name='person' size={24} color={color} />,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
