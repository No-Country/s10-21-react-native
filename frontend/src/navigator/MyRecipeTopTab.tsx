import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NewRecipeForm from "../screens/newRecipeForm/NewRecipeForm";
import UserRecipe from "../screens/userRecipe/UserRecipe";
import Constants from "expo-constants";
import { colors } from "../utils/colors";

const Tab = createMaterialTopTabNavigator();

export default function MyRecipes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: Constants.statusBarHeight + 10,
        },
        tabBarPressColor: colors.purple,
        tabBarActiveTintColor: colors.purple,
      }}
    >
      <Tab.Screen name="My Recipes" component={UserRecipe} />
      <Tab.Screen name="New Recipe" component={NewRecipeForm} />
    </Tab.Navigator>
  );
}
