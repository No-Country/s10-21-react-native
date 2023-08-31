
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import * as WebBrowser from "expo-web-browser";
import { useState, useEffect } from 'react';
import * as Google from "expo-auth-session/providers/google"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BsFillPersonLinesFill } from 'react-icons/bs';


WebBrowser.maybeCompleteAuthSession();

export default function Auth() {
	const [user, setUser] = useState(null)
	const[request, response , promptAsync] = Google.useAuthRequest({
		androidClientId:"197093024995-ohnc4tcbqu3v99g36kursr9bapv59ok2.apps.googleusercontent.com",
		webClientId:"197093024995-2ji9cs8uvgj4119vrjahvppep8snrvga.apps.googleusercontent.com"
	});

	const getLocalUser = async () => {
		const data = await AsyncStorage.getItem("@user");
		if(!data) return null
		return JSON.parse(data)
	}

	const getUserInfo = async (token) => {
		if(!token) return;

		try{
			const response = await fetch(
				"https://www.googleapis.com/userinfo/v2/me",{
					headers: {Authorization: `Bearer ${token}`}
				}
			);
			const user = await response.json()
			await AsyncStorage.setItem("@user", JSON.stringify(user))
			setUser(user)
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		handleSignInWithGoogle()
	}, [response])

	async function handleSignInWithGoogle(){
		const user = await getLocalUser();
		if(!user){
			if(response?.type === "success"){
				getUserInfo(response.authentication.accessToken)
			}else{
				setUser(user)
			}
		}
	}
    return (
	<View style={styles.container}>
      {!user ? (
        <TouchableOpacity style={styles.MainButtons} disabled={!request} onPress={() => {promptAsync();}}>
            <Image
            source={require("../../../assets/icons/google.png")}
            style={styles.buttonImageIconStyle}
            />
            <Text style={styles.text}>Sign In With Google</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.container}>
          {user?.picture && (
            <Image source={{ uri: user?.picture }} style={styles.image} />
          )}
          <Text style={styles.text}>Email: {user.email}</Text>
          <Text style={styles.text}>
            Verified: {user.verified_email ? "yes" : "no"}
          </Text>
          <Text style={styles.text}>Name: {user.name}</Text>
          {/* <Text style={styles.text}>{JSON.stringify(userInfo, null, 2)}</Text> */}
        </View>
      )}
      <TouchableOpacity style={styles.MainButtons} onPress={async () => await AsyncStorage.removeItem("@user")}>
        <BsFillPersonLinesFill color='white'/>
            <Text style={styles.text}>Enter as guest</Text>
      </TouchableOpacity>

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
