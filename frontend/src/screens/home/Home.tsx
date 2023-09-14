import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import SearchHeader from '../../components/searchHeader/SearchHeader';
import { styles } from './homeStyles';
import CardHome from '../../components/cardRecipe/CardRecipe';
import { useFoodApi } from '../../hooks/useFoodApi';
import { AppContext } from '../../context/AppContext';
import HomeFooter from '../../homeFooter/HomeFooter';
import { colors } from '../../utils/colors';
import Toast from 'react-native-toast-message';

const Home = () => {
	const [query, setQuery] = useState('');

	const { queries, favorites } = useContext(AppContext);

	const { getData, recipes, error, isLoading } = useFoodApi();

	const getUserQueary = (text: string) => {
		setQuery(text);
	};

	const resetUserQuery = () => {
		setQuery('');
	};

	useEffect(() => {
		const debounced = setTimeout(() => {
			getData(query);
			if (error) {
				console.log('error', error);
			} else {
				console.log('recipes loaded');
			}
		}, 1000);
		return () => {
			clearTimeout(debounced);
		};
	}, [query, queries]);

	return (
		<View style={styles.container}>
			<SearchHeader getUserQueary={getUserQueary} resetUserQuery={resetUserQuery} query={query} />

			{!isLoading ? (
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
						return <CardHome {...item} />;
					}}
					keyExtractor={(item) => item?.recipe?.uri}
					numColumns={2}
					horizontal={false}
					ListFooterComponent={<HomeFooter />}
				/>
			) : (
				<ActivityIndicator size='large' color={colors.purple} />
			)}
			<Toast />
		</View>
	);
};

export default Home;
