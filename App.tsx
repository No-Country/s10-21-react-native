import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home/Home';
 
export default function App() {
  return (
    <View style={{    overflow: 'visible'
  }}>
      <StatusBar style="auto" />
      <Home/>
    </View>
  );
}
