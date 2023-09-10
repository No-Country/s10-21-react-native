import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { styles } from "./userRecipeStyle";

const UserRecipe = () => {
  return (
    <View style={styles.userRecipeContainer}>
      <Text style={styles.text}>You haven't saved any recipes yet.</Text>
      <Text>🤔</Text>
    </View>
  );
};

export default UserRecipe;
