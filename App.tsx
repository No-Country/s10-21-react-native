import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './src/navigator/RootStack';
import { StatusBar } from 'expo-status-bar';
import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import RegistrationScreen from './src/components/Auth/RegistrationScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

export default function App() {
		return (
		<SafeAreaProvider>
			  <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >    
          <Stack.Screen name="RegisterScreen" component={AuthScreen} />
		  
        </Stack.Navigator>
      </NavigationContainer>
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
