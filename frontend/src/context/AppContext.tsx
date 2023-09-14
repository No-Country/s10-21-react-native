import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useMemo, useState } from 'react';
import { useAppApi } from '../hooks/useAppApi';
import { HitsProps } from '../types/recipeResponse';
import Toast from 'react-native-toast-message';

interface Queries {
	cuisineType: string;
	mealType: string;
	imageSize: string;
}

interface User {
	id: string;
	name: string;
	email: string;
	img: string;
}
interface AppContextProps {
	queries: Queries;
	token: string | null;
	user: User | null;
	favorites: favoritesProps[];
	changeCuisineType: (cuisineType: string) => void;
	changeMealType: (mealType: string) => void;
	changeImageSize: (imageSize: string) => void;
	returnCleanQueries: () => {};
	getAllData: () => void;
	deleteLoginData: () => void;
	getUserData: (idTokenGoogle: string) => void;
	addFavorite: (data: HitsProps) => void;
	delFavorite: (id: string) => void;
	updateFavorites: () => void;
}

export interface favoritesProps {
	_id?: string;
	label: string;
	image: string;
	href: string;
	calories: number;
	totalTime: number;
}

export const AppContext = createContext({} as AppContextProps);

const initialQueries = {
	cuisineType: 'South American',
	mealType: '',
	imageSize: 'REGULAR',
};

export const AppContextProvider = ({ children }: any) => {
	const [queries, setQueries] = useState<Queries>(initialQueries);
	const [token, setToken] = useState<string | null>(null);
	const [user, setUser] = useState<User>(null);
	const [favorites, setFavorites] = useState<favoritesProps[]>([]);
	const { login, getAllFavorites, postFavorite, deleteFavorite } = useAppApi();

	const getUserData = async (idTokenGoogle: string) => {
		const response = await login(idTokenGoogle);

		if (response.token) {
			// setToken(response.token);
			// setUser(response.data);
			// save token to async storage
			await AsyncStorage.setItem('token', response.token);
			await AsyncStorage.setItem('user', JSON.stringify(response.data));

			// get all favorites
			await getAllData();
		} else {
			console.log('Error al obtener token');
		}
	};

	const getAllData = async () => {
		// obtain data from async storage

		const tokenStorage = await AsyncStorage.getItem('token');
		const dataStorage = await AsyncStorage.getItem('user');
		const data = JSON.parse(dataStorage);
		// set data to state

		setToken(tokenStorage);
		setUser(data);
		// get all favorites
		await updateFavorites();
	};

	const deleteLoginData = async () => {
		await AsyncStorage.removeItem('token');
		await AsyncStorage.removeItem('user');
		setToken(null);
		setUser(null);
	};

	const addFavorite = async (data: HitsProps) => {
		const favData: favoritesProps = {
			label: data.recipe.label,
			image: data.recipe.image,
			href: data._links.self.href,
			calories: data.recipe.calories,
			totalTime: data.recipe.totalTime,
		};
		const response = await postFavorite(favData, token);
		if (response.msg === 'Create favourite') {
			await updateFavorites();
			// alert('Receta guardada en favoritos');
			Toast.show({
				type: 'success',
				position: 'bottom',
				text1: 'Done',
				text2: 'Recipe added to favorites',
			});
		}
		if (response.msg === 'Token expirado' || response.msg === 'Token no válido') {
			deleteLoginData();
			// alert('Token expirado, por favor vuelve a iniciar sesión');
			Toast.show({
				type: 'error',
				position: 'bottom',
				text1: 'Error',
				text2: 'Token expired, please login again',
			});
		}
	};

	const updateFavorites = async () => {
		const data = await getAllFavorites(token);
		if (data) {
			setFavorites(data.favourites);
		} else {
			setFavorites([]);
			if (data.msg === 'Token expirado' || data.msg === 'Token no válido') {
				deleteLoginData();
			}
		}
	};

	const delFavorite = async (id: string) => {
		const response = await deleteFavorite(id, token);
		if (response.msg === 'Favourite deleted') {
			await updateFavorites();
			// alert('Receta eliminada de favoritos');
			Toast.show({
				type: 'success',
				position: 'bottom',
				text1: 'Done',
				text2: 'Recipe deleted from favorites',
			});
		}
		if (response.msg === 'Token expirado' || response.msg === 'Token no válido') {
			deleteLoginData();
			// alert('Token expirado, por favor vuelve a iniciar sesión');
			Toast.show({
				type: 'error',
				position: 'bottom',
				text1: 'Error',
				text2: 'Token expired, please login again',
			});
		}
	};

	const changeCuisineType = (cuisineType: string) => {
		setQueries({ ...queries, cuisineType });
	};

	const changeMealType = (mealType: string) => {
		setQueries({ ...queries, mealType });
	};

	const changeImageSize = (imageSize: string) => {
		setQueries({ ...queries, imageSize });
	};

	const returnCleanQueries = () => {
		return Object.fromEntries(Object.entries(queries).filter(([_, v]) => v !== ''));
	};

	const contextValue = useMemo(() => {
		return {
			queries,
			token,
			user,
			favorites,
			changeCuisineType,
			changeMealType,
			changeImageSize,
			returnCleanQueries,
			getAllData,
			deleteLoginData,
			getUserData,
			addFavorite,
			delFavorite,
			updateFavorites,
		};
	}, [queries, token, user, favorites]);

	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
