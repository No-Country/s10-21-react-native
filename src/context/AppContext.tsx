import React, { createContext, useMemo, useState } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }: any) => {
	const [foodList, setFoodList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	const fetchFoodList = async () => {
		setIsLoading(true);
		try {
			const response = await fetch('https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2');
			const data = await response.json();
			setFoodList(data.meals);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const contextValue = useMemo(() => {
		return {
			foodList,
			isLoading,
			searchQuery,
			setSearchQuery,
			fetchFoodList,
		};
	}, [foodList, isLoading, searchQuery, setSearchQuery]);

	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
