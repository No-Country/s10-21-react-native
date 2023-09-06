
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView} from 'react-native';
import * as WebBrowser from "expo-web-browser";
import { useState, useEffect } from 'react';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BsFillPersonLinesFill } from 'react-icons/bs';


WebBrowser.maybeCompleteAuthSession();

export default function Auth() {
	const [user, setUser] = useState(null)
		//androidClientId:"197093024995-ohnc4tcbqu3v99g36kursr9bapv59ok2.apps.googleusercontent.com",
		//webClientId:"197093024995-2ji9cs8uvgj4119vrjahvppep8snrvga.apps.googleusercontent.com"

    useEffect(() => {
      GoogleSignin.configure({
        webClientId:"197093024995-2ji9cs8uvgj4119vrjahvppep8snrvga.apps.googleusercontent.com"
      })
    },[])

    const signIn = async () =>{
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        setUser({ userInfo });
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    }

    const signOut = async () => {
      try {
        await GoogleSignin.signOut();
        setUser({ user: null }); // Remember to remove the user from your app's state as well
      } catch (error) {
        console.error(error);
      }
    };

    return (
		<View>
			<ScrollView contentInsetAdjustmentBehavior="automatic">        
            <View style={styles.container}>
              <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
              />
            </View>
        </ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
	  alignItems: "center",
	  justifyContent: "center",
      flexDirection:"column",
	},
	text: {
	  fontSize: 15,
	  fontWeight: "normal",
      color:"white",
      margin:8,
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

    MainButtons:{
        borderColor:"gray",
        borderWidth: 1,
        borderRadius: 10,
        padding:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        textShadowColor:'#585858',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
    }
  });
