import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

export default function Favorites() {
	const { favorites } = useContext(AppContext);

	useEffect(() => {
		console.log(favorites);
	}, [favorites]);

	return (
		<View style={styles.container}>
			<Text>Favorites</Text>
			{Array.isArray(favorites) ? (
				favorites.map((item) => (
					<View key={item.label}>
						<Text>{item.label}</Text>
					</View>
				))
			) : (
				<Text>No favorites</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
