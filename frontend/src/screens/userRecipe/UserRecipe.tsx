import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./userRecipeStyle";
import { useNavigation } from "@react-navigation/native";

const mockRecipe = [
  {
    id: "1",
    name: "Pizza",
    ingredients: "tomato, cheese, pepperoni",
    image:
      "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: "1",
    name: "Pizza",
    ingredients: "tomato, cheese, pepperoni",
    image:
      "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: "1",
    name: "Pizza",
    ingredients: "tomato, cheese, pepperoni",
    image:
      "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const UserRecipe = () => {
  // const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamsList, 'RecipeDetail'>>();
  
  return (
    <View style={styles.userRecipeContainer}>
      {/* <Text style={styles.text}>You haven't saved any recipes yet.</Text>
      <Text>🤔</Text> */}

      <FlatList
        contentContainerStyle={{
          rowGap: 20,
          justifyContent: "space-between",
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 3,
        }}
        data={mockRecipe}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.cardContainer}
              // onPress={() => navigation.navigate("RecipeDetail", { ...data }  )}
            >
              <View style={styles.imgContainer}>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>
              <View style={styles.TextContainer}>
                <Text
                  style={styles.recipeTitle}
                  numberOfLines={2}
                  ellipsizeMode={"tail"}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item?.id}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
};

export default UserRecipe;
