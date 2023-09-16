import { useState, useContext } from 'react';
import recipeDB from '../api/recipeDB';
import { recipeResponseProps } from '../types/recipeResponse';
import { AppContext } from '../context/AppContext';

export const useFoodApi = () => {
	const [recipes, setRecipes] = useState<recipeResponseProps>();
	const [error, setError] = useState('');
	const { returnCleanQueries } = useContext(AppContext);
	const [isLoading, setIsLoading] = useState(false);

	const getData = async (searchQuery: string) => {
		setIsLoading(true);
		try {
			const { data } = await recipeDB.get('', {
				params: {
					q: searchQuery,
					...returnCleanQueries(),
				},
			});
			setRecipes(data);
			setIsLoading(false);
		} catch (error) {
			setError(error.message);
		}
	};

	return { getData, recipes, error, isLoading };
};
