import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./ingredientItemStyle";

type IngredientItem = {
  uri: string;
  text: string;
};

const IngredientItem = ({ uri, text }: IngredientItem) => {
  return (
      <View style={styles.ingredientsContainer}>
        <Image source={{ uri: uri }} style={styles.ingredientImage} accessibilityLabel={`Image of ${text}`}/>
        <Text numberOfLines={2} style={styles.ingredientsText}>
          {text}
        </Text>
      </View>
  );
};

export default IngredientItem;
