import React, { useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {
	GoogleSignin,
	GoogleSigninButton,
	statusCodes,
} from '@react-native-google-signin/google-signin';

import { google_client_id } from '@env';
import { AppContext } from '../../context/AppContext';

WebBrowser.maybeCompleteAuthSession();

GoogleSignin.configure({
	webClientId: process.env.GOOGLE_CLIENT_ID || google_client_id,
	offlineAccess: true,
});

export default function Auth() {
	const { getUserData } = useContext(AppContext);

	const signIn = async () => {
		try {
			const sing = await GoogleSignin.hasPlayServices();
			// TODO: send token to backend
			const data = await GoogleSignin.signIn();
			await getUserData(data.idToken);
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
