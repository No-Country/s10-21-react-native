import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeDetail from '../screens/recipeDetail/RecipeDetail';
import Home from '../screens/home/Home';
import { HomeStackParamsList } from '../types/homeStackParamsList';

const Stack = createNativeStackNavigator<HomeStackParamsList>();


export function HomeStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="SearcherAndList"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="SearcherAndList"
        component={Home}     
      />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetail}
        options={{
          title: 'Recipe Detail',
        }}
      />
    </Stack.Navigator>
  );
}