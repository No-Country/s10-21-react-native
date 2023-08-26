import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./cardRecipeStyles";
import { ClockIcon, FireIcon, HeartIcon } from "../../../assets/Icons/SVGicons";

type cardProps = {
  tittle: string;
  calories: number;
  totalTime: number;
  imageUrl: string;
};

const CardHome = ({ calories, tittle, totalTime, imageUrl }: cardProps) => {
 
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.imgContainer}>
        <TouchableOpacity style={styles.favoriteIcon}>
          <HeartIcon color="#676767" />
        </TouchableOpacity>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.recipeTitle}
        
        numberOfLines={2}
        ellipsizeMode={'tail'}
        >{tittle}</Text>
        <View style={styles.kcalAndTime}>
          <View style={styles.data}>
            <View>
              <FireIcon color="#868686" size="15" />
            </View>
            <Text style={styles.dataText}>{calories.toFixed()} Cal</Text>
          </View>
          <Text style={styles.dataSeparator}>-</Text>
          <View style={styles.data}>
            <View>
              <ClockIcon color="#868686" size="15" />
            </View>
            <Text style={styles.dataText}>{totalTime} min</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardHome;
