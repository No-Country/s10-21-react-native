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
			<Text>You need to log in to use this functionality</Text>
			{/* Login button */}
			<TouchableOpacity style={styles.button} onPress={goToLogin}>
				<Text>Go to Login</Text>
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
		marginTop: 20,
	},
});
