import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Auth from "../../components/Auth/Auth"

const AuthScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={require("../../../assets/bg.png")}  blurRadius={5} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Food App</Text>
      <Auth/>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AuthScreen;
