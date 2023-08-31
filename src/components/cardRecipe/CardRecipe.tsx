import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./cardRecipeStyles";
import { ClockIcon, FireIcon, HeartIcon } from "../../../assets/Icons/SVGicons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamsList } from "../../types/homeStackParamsList";
import { HitsProps } from "../../types/recipeResponse";

const CardHome = ({ ...data }: HitsProps) => {
  
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamsList, 'RecipeDetail'>>();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("RecipeDetail", { ...data }  )}
    >
      <View style={styles.imgContainer}>
        <TouchableOpacity style={styles.favoriteIcon}>
          <HeartIcon color="#676767" />
        </TouchableOpacity>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: data?.recipe?.image,
          }}
        />
      </View>
      <View style={styles.TextContainer}>
        <Text
          style={styles.recipeTitle}
          numberOfLines={2}
          ellipsizeMode={"tail"}
        >
          {data?.recipe?.label}
        </Text>
        <View style={styles.kcalAndTime}>
          <View style={styles.data}>
            <View>
              <FireIcon color="#868686" size="15" />
            </View>
            <Text style={styles.dataText}>{data?.recipe?.calories.toFixed()} Cal</Text>
          </View>
          <Text style={styles.dataSeparator}>-</Text>
          <View style={styles.data}>
            <View>
              <ClockIcon color="#868686" size="15" />
            </View>
            <Text style={styles.dataText}>{data?.recipe?.totalTime} min</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardHome;
