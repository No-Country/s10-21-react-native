import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './src/navigator/RootStack';
import { StatusBar } from 'expo-status-bar';
import AuthScreen from './src/screens/AuthScreen/AuthScreen';



export default function App() {
		return (
		<SafeAreaProvider>
			<RootStack />
		</SafeAreaProvider>
	);
}
const styles = StyleSheet.create({
	container: {
	  backgroundColor: "#fff",
	  alignItems: "center",
	  justifyContent: "center",
	},
  });
