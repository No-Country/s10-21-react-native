import { useState } from 'react';
import recipeDB from '../api/recipeDB';
import { recipeResponseProps } from '../types/recipeResponse';

export const useFoodApi = () => {
	const [recipes, setRecipes] = useState<recipeResponseProps>();
	const [error, setError] = useState('');

	const getData = async (query: string) => {
		try {
			const { data } = await recipeDB.get('', {
				params: {
					q: query,
				},
			});
			setRecipes(data);
		} catch (error) {
			setError(error.message);
		}
	};

	return { getData, recipes, error };
};
