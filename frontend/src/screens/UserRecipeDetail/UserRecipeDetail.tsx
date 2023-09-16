import { Image, ScrollView, Text, View } from "react-native";
import ScreenTitle from "../../components/screenTittle/ScreenTittle";
import { styles } from "./userRecipeDetailStyles";
import { Button, Divider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import appDB from "../../api/appDB";
import { useNavigation } from "@react-navigation/native";
import { Popup } from "react-native-popup-confirm-toast";
import { mutate } from "swr";

const UserRecipeDetail = ({ route }) => {
  const navigation = useNavigation();

  const deleteRecipe = async (id) => {
    const token = await AsyncStorage.getItem("token");

    Popup.show({
      type: "confirm",
      title: "Are you your you want to delete this recipe?",
      textBody: "It is permanent",
      buttonText: "No, I dont want delete it.",
      confirmText: "Yes, delete it.",
      callback: () => {
        Popup.hide();
      },
      cancelCallback: async () => {
        try {
          const response = await appDB.delete(`/recipe/${id}`, {
            headers: {
							['x-token']: token,
						},
          });

          if (response.status == 200) {
            mutate("https://dishdetective.onrender.com/api/recipe");
            navigation.goBack();
          } else {
            console.warn(response.statusText, "-", response.status);
          }
        } catch (error) {
          console.log(error);
        }
        Popup.hide();
      },
    });
  };
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <ScreenTitle text="Your Recipe Detail" backButton={true} />
      <View style={styles.containerRecipe}>
        {!route.params.image ? (
          <Image
            resizeMode="cover"
            style={styles.image}
            source={require("../../../assets/noPhotos.jpg")}
          />
        ) : (
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: "data:image/jpeg;base64," + route.params.image }}
          />
        )}
        <View>
          <View style={styles.titleAndDesc}>
            <Text style={styles.title}>{route.params.name}</Text>
            {route.params.ingredients.map((ingredient, index) => (
              <Text style={styles.ingredient} key={index}>
                - {ingredient.trim()}
              </Text>
            ))}

            <View style={styles.instruction}>
              <Text style={styles.description}>{route.params.description}</Text>
            </View>
          </View>
        </View>
        <Divider />
        <Button
          icon="delete"
          buttonColor="red"
          textColor="#fff"
          labelStyle={{ fontSize: 18 }}
          onPress={() => deleteRecipe(route.params._id)}
        >
          Delete recipe
        </Button>
      </View>
    </ScrollView>
  );
};

export default UserRecipeDetail;
