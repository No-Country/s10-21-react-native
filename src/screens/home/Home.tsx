import { View, FlatList, Text } from "react-native";
import SearchHeader from "../../components/searchHeader/SearchHeader";
import { styles } from "./homeStyles";
import CardHome from "../../components/cardRecipe/CardRecipe";
import useSWR from "swr";
import axios from "axios";
import { useEffect, useState } from "react";
import { recipeResponseProps } from "../../types/recipeResponse";



const Home = () => {
  const [recipes, setRecipes] = useState<recipeResponseProps>();
  const getData = async () => {
    const options = {
      method: 'GET',
      url: 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2/',
      params: {
        type: 'public',
        co2EmissionsClass: 'A+',
        'field[0]': 'uri',
        beta: 'true',
        random: 'true',
        'cuisineType[0]': 'American',
        'imageSize[0]': 'LARGE',
        'mealType[0]': 'Breakfast',
        'health[0]': 'alcohol-cocktail',
        'diet[0]': 'balanced',
        'dishType[0]': 'Biscuits and cookies',
        from: 20,
        to: 30
      },

      headers: {
        'Accept-Language': 'en',
        'X-RapidAPI-Key': '88a864ae53msh999934775aef7fcp1fd42djsn78b996068f97',
        'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
      }
    };

    try {
      const { data } = await axios.request<recipeResponseProps>(options);
      setRecipes(data);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <SearchHeader />

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
    </View>
  );
};

export default Home;
