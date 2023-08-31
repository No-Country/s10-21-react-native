import React, { createContext, useMemo, useState } from 'react';

interface Queries {
	cuisineType: string;
	mealType: string;
	imageSize: string;
}

interface AppContextProps {
	queries: Queries;
	changeCuisineType: (cuisineType: string) => void;
	changeMealType: (mealType: string) => void;
	changeImageSize: (imageSize: string) => void;
	returnCleanQueries: () => {};
}

export const AppContext = createContext({} as AppContextProps);

const initialQueries = {
	cuisineType: 'South American',
	mealType: '',
	imageSize: 'REGULAR',
};

export const AppContextProvider = ({ children }: any) => {
	const [queries, setQueries] = useState<Queries>(initialQueries);

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
			changeCuisineType,
			changeMealType,
			changeImageSize,
			returnCleanQueries,
		};
	}, [queries]);

	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
