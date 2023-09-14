import { View, StyleSheet, FlatList, Text } from 'react-native';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import CardFavorite from '../components/cardFavorite/CardFavorite';
import Toast from 'react-native-toast-message';

export default function Favorites() {
	const { favorites } = useContext(AppContext);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Favorites</Text>
			{
				<FlatList
					contentContainerStyle={{
						rowGap: 20,
						justifyContent: 'space-between',
					}}
					columnWrapperStyle={{
						justifyContent: 'space-between',
						paddingHorizontal: 3,
					}}
					data={favorites}
					renderItem={({ item }) => {
						return <CardFavorite data={item} />;
					}}
					keyExtractor={(item) => item.label}
					numColumns={2}
					horizontal={false}
					ListFooterComponent={<View style={{ padding: 10 }}></View>}
				/>
			}
			<Toast />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		paddingHorizontal: 30,
		marginBottom: 60,
		height: '100%',
	},
	recipeList: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	title: {
		marginTop: 20,
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
});
