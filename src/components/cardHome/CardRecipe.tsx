import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./cardRecipeStyles";
import { ClockIcon, FireIcon, HeartIcon } from "../../../assets/Icons/SVGicons";

const CardHome = () => {
  const tittle = "Locro con chimi y chorizo colorado";

  const truncateText = (text: string) => {
    const textLength = text.length;

    if (textLength > 32) {
      return text.slice(0, 34) + "...";
    }

    return text;
  };

  const finalTitle = truncateText(tittle);

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.imgContainer}>
        <TouchableOpacity style={styles.favoriteIcon}>
          <HeartIcon color="#4E4E4E"/>
        </TouchableOpacity>
        <View style={styles.favoriteIcon}></View>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require("../../../assets/locro.jpg")}
        />
      </View>
      <Text style={styles.recipeTitle}>{finalTitle}</Text>
      <View style={styles.kcalAndTime}>
        <View style={styles.data}>
          <View>
            <FireIcon color="#868686" size="15" />
          </View>
          <Text style={styles.dataText}>350Cal</Text>
        </View>
        <Text style={styles.dataSeparator}>-</Text>
        <View style={styles.data}>
          <View>
            <ClockIcon color="#868686" size="15" />
          </View>
          <Text style={styles.dataText}>45 min</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardHome;
