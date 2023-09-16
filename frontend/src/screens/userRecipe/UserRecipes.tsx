import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { styles } from "./userRecipeStyle";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ScreenTittle from "../../components/screenTittle/ScreenTittle";
import { UserRecipeParamsList } from "../../types/userRecipeParamsList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useSWR from "swr";
import axios from "axios";
import { colors } from "../../utils/colors";

const UserRecipes = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<UserRecipeParamsList, "UserRecipeDetail">
    >();

  const fetcher = async (url) => {
    const token = await AsyncStorage.getItem("token");
    return axios
      .get(url, {
        headers: {
          ["x-token"]: token,
        },
      })
      .then((res) => res.data);
  };

  const { data, error, isLoading } = useSWR(
    "https://dishdetective.onrender.com/api/recipe",
    fetcher
  );

  if (error) return <Text>Error</Text>;

  if (isLoading) {
    return <ActivityIndicator size="large" color={colors.purple} />;
  }

  if (data?.recipes.length === 0) {
    return (
      <Text style={styles.noRecipeMesssage}>Go and post your a recipe</Text>
    );
  }

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <ScreenTittle text="Your recipes" />
      <View style={styles.userRecipeContainer}>
        <FlatList
          contentContainerStyle={{
            rowGap: 20,
            justifyContent: "space-between",
          }}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 3,
          }}
          data={data?.recipes}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.cardContainer}
                onPress={() =>
                  navigation.navigate("UserRecipeDetail", { ...item })
                }
              >
                <View style={styles.imgContainer}>
                  {!item.image ? (
                    <Image
                      resizeMode="cover"
                      style={styles.image}
                      source={require("../../../assets/noPhotos.jpg")}
                    />
                  ) : (
                    <Image
                      resizeMode="cover"
                      style={styles.image}
                      source={{ uri: "data:image/jpeg;base64," + item.image }}
                    />
                  )}
                </View>
                <View style={styles.TextContainer}>
                  <Text
                    style={styles.recipeTitle}
                    numberOfLines={2}
                    ellipsizeMode={"tail"}
                  >
                    {item?.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item?._id}
          numColumns={2}
          horizontal={false}
          ListFooterComponent={<View style={styles.ListFooterComponent}></View>}
        />
      </View>
    </View>
  );
};

export default UserRecipes;
