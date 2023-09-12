import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export const ToLoginScreen = () => {
	const navigate = useNavigation();

	const goToLogin = () => {
		// go to login screen
		navigate.navigate('User' as never);
	};
	return (
		<View style={styles.container}>
			<Text>Necesita iniciar sesion para utilizar esta funcionalidad</Text>
			{/* Login button */}
			<TouchableOpacity style={styles.button} onPress={goToLogin}>
				<Text>Iniciar sesion</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10,
	},
});
