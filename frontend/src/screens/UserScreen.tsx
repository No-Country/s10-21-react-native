import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AppContext } from '../context/AppContext';

export const UserScreen = () => {
	const { user } = useContext(AppContext);
	return (
		user && (
			<View style={styles.container}>
				<Text>Bienvenido {user?.name} </Text>
				<Image source={{ uri: user?.img }} style={{ width: 200, height: 200 }} />
			</View>
		)
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
