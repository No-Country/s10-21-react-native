import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import RootStack from './src/navigator/RootStack';
const Stack = createStackNavigator();

export default function App() {
	return (
		<SafeAreaProvider>
			<RootStack />
		</SafeAreaProvider>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
