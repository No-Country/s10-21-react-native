import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewRecipeForm from '../screens/newRecipeForm/NewRecipeForm';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function MyRecipes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Recipe" component={NewRecipeForm} />
    </Tab.Navigator>
  );
}