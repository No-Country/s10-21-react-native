import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import SearchHeader from '../../components/searchHeader/SearchHeader';
import { styles } from './homeStyles';
import CardHome from '../../components/cardRecipe/CardRecipe';
import { useFoodApi } from '../../hooks/useFoodApi';

const Home = () => {
	const [query, setQuery] = useState('');
	const { getData, recipes, error } = useFoodApi();

	const getUserQueary = (text: string) => {
		setQuery(text);
	};

	// const [recipes, setRecipes] = useState<recipeResponseProps>();

	useEffect(() => {
		const debounced = setTimeout(() => {
			getData(query);
			if (error) {
				console.log(error);
			} else {
				console.log(recipes);
			}
		}, 1000);
		return () => {
			clearTimeout(debounced);
		};
	}, [query]);

	return (
		<View style={styles.container}>
			<SearchHeader getUserQueary={getUserQueary} query={query} />

			{recipes?.hits.length > 0 ? (
				<FlatList
					contentContainerStyle={{
						rowGap: 20,
						justifyContent: 'space-between',
					}}
					columnWrapperStyle={{
						justifyContent: 'space-between',
						paddingHorizontal: 3,
					}}
					data={recipes?.hits}
					renderItem={({ item }) => {
						return (
							<CardHome
								calories={item.recipe.calories}
								tittle={item.recipe.label}
								totalTime={item.recipe.totalTime}
								imageUrl={item.recipe.image}
							/>
						);
					}}
					keyExtractor={(item) => item?.recipe?.uri}
					numColumns={2}
					horizontal={false}
				/>
			) : (
				<ActivityIndicator size='large' />
			)}
		</View>
	);
};

export default Home;
