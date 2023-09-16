import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NewRecipeForm from "../screens/newRecipeForm/NewRecipeForm";
import Constants from "expo-constants";
import { colors } from "../utils/colors";
import UserRecipes from "../screens/userRecipe/UserRecipes";

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
      <Tab.Screen name="My Recipes" component={UserRecipes} />
      <Tab.Screen name="New Recipe" component={NewRecipeForm} />
    </Tab.Navigator>
  );
}
