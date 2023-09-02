import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  labelHeading: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.orange,
  },
  labelContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },
  labelPill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.orangeLight,
    borderRadius: 20,
  },
  labelPillCaution: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.orange,
    borderRadius: 20,
    color: "#fff",
  },
  containerNutrientsData: {
    flexDirection: "row",
    marginBottom: 5
  },
  nutrientLabel: {
    fontWeight: "600",
},
  nutrientValue: {},
});
