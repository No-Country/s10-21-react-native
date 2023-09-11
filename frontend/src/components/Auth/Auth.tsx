import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {
	GoogleSignin,
	GoogleSigninButton,
	statusCodes,
} from '@react-native-google-signin/google-signin';

WebBrowser.maybeCompleteAuthSession();

GoogleSignin.configure({
	webClientId: '218714927517-slee8dhh8a97g5911doktccjq7iqe9ec.apps.googleusercontent.com',
	offlineAccess: true,
});

export default function Auth() {
	const [token, setToken] = useState('');
	//androidClientId:"197093024995-ohnc4tcbqu3v99g36kursr9bapv59ok2.apps.googleusercontent.com",
	//webClientId:"197093024995-2ji9cs8uvgj4119vrjahvppep8snrvga.apps.googleusercontent.com"

	// useEffect(() => {
	// }, []);

	const signIn = async () => {
		try {
			console.log('a');
			const sing = await GoogleSignin.hasPlayServices();
			console.log(sing);
			const data = await GoogleSignin.signIn();
			// setToken(idToken);
			console.log(data);
			console.log('SIUUUUU');
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				console.log('user cancelled the login flow');
			} else if (error.code === statusCodes.IN_PROGRESS) {
				console.log('operation (e.g. sign in) is in progress already');
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				console.log('play services not available or outdated');
			} else {
				console.log('some other error happened' + JSON.stringify(error));
			}
		}
	};

	const signOut = async () => {
		try {
			await GoogleSignin.signOut();
			setToken(''); // Remember to remove the user from your app's state as well
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<View>
			<ScrollView contentInsetAdjustmentBehavior='automatic'>
				<View style={styles.container}>
					<GoogleSigninButton
						style={{ width: 192, height: 48 }}
						size={GoogleSigninButton.Size.Wide}
						color={GoogleSigninButton.Color.Dark}
						onPress={signIn}
					/>
				</View>
				<Text>ola</Text>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	text: {
		fontSize: 15,
		fontWeight: 'normal',
		color: 'white',
		margin: 8,
	},
	card: {
		borderWidth: 1,
		borderRadius: 15,
		padding: 15,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	buttonImageIconStyle: {
		padding: 10,
		margin: 5,
		height: 25,
		width: 25,
		resizeMode: 'stretch',
	},

	MainButtons: {
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
		textShadowColor: '#585858',
		textShadowOffset: { width: 5, height: 5 },
		textShadowRadius: 10,
	},
});
