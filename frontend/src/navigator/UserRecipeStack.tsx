import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserRecipeParamsList } from "../types/userRecipeParamsList";
import MyRecipes from "./MyRecipeTopTab";
import UserRecipeDetail from "../screens/UserRecipeDetail/UserRecipeDetail";

const Stack = createNativeStackNavigator<UserRecipeParamsList>();

export function UserRecipeStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="UserRecipes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="UserRecipes" component={MyRecipes} />
      <Stack.Screen
        name="UserRecipeDetail"
        component={UserRecipeDetail}
        options={{
          title: "Your Recipe Detail",
        }}
      />
    </Stack.Navigator>
  );
}
