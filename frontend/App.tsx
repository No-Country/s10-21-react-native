import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RootStack from './src/navigator/RootStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContextProvider } from './src/context/AppContext';

export default function App() {
	return (
		<AppContextProvider>
			<SafeAreaProvider>
				<View style={styles.container}>
					<StatusBar style='auto' />
				</View>
				<RootStack />
			</SafeAreaProvider>
		</AppContextProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 30,
	},
});
