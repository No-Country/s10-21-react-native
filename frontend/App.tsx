import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootStack from "./src/navigator/RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppContextProvider } from "./src/context/AppContext";
import { Root as PopupRootProvider } from "react-native-popup-confirm-toast";

export default function App() {
  return (
    <PopupRootProvider>
      <AppContextProvider>
        <SafeAreaProvider>
          <View style={styles.container}>
            <StatusBar style="auto" />
          </View>
          <RootStack />
        </SafeAreaProvider>
      </AppContextProvider>
    </PopupRootProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
});
