import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useMemo, useState } from 'react';

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
	changeCuisineType: (cuisineType: string) => void;
	changeMealType: (mealType: string) => void;
	changeImageSize: (imageSize: string) => void;
	returnCleanQueries: () => {};
	getAllData: () => void;
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

	const getAllData = async () => {
		// obtain data from async storage
		const tokenStorage = await AsyncStorage.getItem('token');
		const dataStorage = await AsyncStorage.getItem('user');
		const data = JSON.parse(dataStorage);
		// set data to state
		setToken(tokenStorage);
		setUser(data);
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
			changeCuisineType,
			changeMealType,
			changeImageSize,
			returnCleanQueries,
			getAllData,
		};
	}, [queries, token, user]);

	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
