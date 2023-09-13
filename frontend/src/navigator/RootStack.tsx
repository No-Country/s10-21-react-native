import React, { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { NavigationContainer } from '@react-navigation/native';

import { Fontisto, Ionicons } from '@expo/vector-icons';
import { CategoriesScreen } from '../screens/CategoriesScreen';
import Favorites from '../screens/Favorites';
import HomeScreen from '../screens/home/Home';
import { ToLoginScreen } from '../screens/AuthScreen/ToLoginScreen';
import AuthScreen from '../screens/AuthScreen/AuthScreen';
import { UserScreen } from '../screens/UserScreen';
import { AppContext } from '../context/AppContext';
import MyRecipes from './MyRecipeTopTab';
import { HomeStackScreen } from './HomeStack';

export type RootStackParamList = {
	Home: undefined;
	SavedRecipes: undefined;
	Favorites: undefined;
	AddRecipe: undefined;
	AuthScreen: undefined;
	User: undefined;
	NewRecipeForm: undefined;
};

const Tab = createMaterialBottomTabNavigator<RootStackParamList>();

export default function RootStack() {
	const { token, getAllData } = useContext(AppContext);

	useEffect(() => {
		getAllData();
		console.log(token);
	}, [token]);

	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name='Home'
					component={HomeStackScreen}
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
					component={token ? Favorites : ToLoginScreen}
					options={{
						tabBarLabel: 'Favorites',
						tabBarIcon: ({ color }) => <Ionicons name='heart' size={24} color={color} />,
					}}
				/>

				<Tab.Screen
					name='NewRecipeForm'
					component={token ? MyRecipes : ToLoginScreen}
					options={{
						tabBarLabel: 'My Recipes',
						tabBarIcon: ({ color }) => <Ionicons name='list' size={24} color={color} />,
					}}
				/>
				<Tab.Screen
					name='User'
					component={token ? UserScreen : AuthScreen}
					options={{
						tabBarLabel: 'Profile',
						tabBarIcon: ({ color }) => <Ionicons name='person' size={24} color={color} />,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
