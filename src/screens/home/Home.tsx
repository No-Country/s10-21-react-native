import React, { lazy, Suspense } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import SearchHeader from "../../components/searchHeader/SearchHeader";
import { styles } from "./homeStyles";
import CardHome from "../../components/cardRecipe/CardRecipe";
import axios from "axios";
import { useEffect, useState } from "react";
import { recipeResponseProps } from "../../types/recipeResponse";
import { app_id, app_key } from "@env";

const Home = () => {
  const [query, setQuery] = useState("");

  const getUserQueary = (text: string) => {
    setQuery(text);
  };

  const [recipes, setRecipes] = useState<recipeResponseProps>();
  const getData = async () => {
    const options = {
      method: "GET",
      url: `https://api.edamam.com/api/recipes/v2`,
      params: {
        type: "public",
        app_id: app_id,
        app_key: app_key,
        beta: "true",
        random: "true",
        diet: "low-carb",
        healt: "alcohol-free",
        cuisineType: "American",
        q: query,
      },
      headers: {
        "Accept-Language": "en",
      },
    };

    try {
      const { data } = await axios.request<recipeResponseProps>(options);
      setRecipes(data);
    } catch (error) {
      console.warn(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <SearchHeader getUserQueary={getUserQueary} query={query} />

      {recipes?.hits.length > 0 ? (
        <FlatList
          contentContainerStyle={{
            rowGap: 20,
            justifyContent: "space-between",
          }}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 3,
          }}
          data={recipes?.hits}
          renderItem={({ item }) => {
            return (
              <CardHome
                calories={item.recipe.calories}
                tittle={item.recipe.label}
                totalTime={item.recipe.totalTime}
                imageUrl={item.recipe.image}
              />
            );
          }}
          keyExtractor={(item) => item?.recipe?.uri}
          numColumns={2}
          horizontal={false}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};

export default Home;
