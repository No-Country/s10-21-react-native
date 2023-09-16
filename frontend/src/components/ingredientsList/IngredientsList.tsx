import React from "react";
import { View } from "react-native";
import { IngredientsProps } from "../../types/recipeResponse";
import IngredientItem from "../ingredientItem/IngredientItem";

const IngredientsList = (ingredientsArray: {
  ingredients: IngredientsProps[];
}) => {
  return (
    <View>
      {ingredientsArray.ingredients.map((ingredient, index) => {
        return <IngredientItem key={index} text={ingredient.text} uri={ingredient.image} />;
      })}
    </View>
  );
};

export default IngredientsList;
