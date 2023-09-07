import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  ingredientsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
    width: "100%",
  },
  ingredientsText: {
    fontSize: 18,
    width: "80%",
    color: colors.purpleLight,
  },
  ingredientImage: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
});
