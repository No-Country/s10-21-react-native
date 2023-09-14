import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  containerRecipe: {
    margin: 30,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
  titleAndDesc: {
    marginVertical: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
  },
  instruction: {
    backgroundColor: '#E9E9E9',
    padding: 5,
    borderRadius: 10
  },
  description: {
    fontSize: 18,
    color: "#5E5E5E",
  },
  ingredient: {
    fontSize: 18,
    padding: 5
  }
});
