import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AppContext } from '../context/AppContext';
import { Button } from 'react-native-paper';

export const UserScreen = () => {
	const { user, deleteLoginData } = useContext(AppContext);

	return (
		user && (
			<View style={styles.container}>
				<Text style={styles.title}>Welcome {user?.name} </Text>
				<Image source={{ uri: user?.img }} style={{ width: 150, height: 150 }} />
				<Button style={styles.logout} mode='contained' onPress={() => deleteLoginData()}>
					<Text>Logout</Text>
				</Button>
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
	title: {
		marginTop: 20,
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
	logout: {
		marginTop: 20,
		backgroundColor: 'red',
	},
});
