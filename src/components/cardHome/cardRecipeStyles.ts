import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    backgroundColor: "#F4F4F4",
    borderRadius: 15,
    width: "48%",
    minHeight: 190,
    elevation: 4,
    justifyContent: "space-between",
  },
  imgContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  favoriteIcon: {
    position: "absolute",
    zIndex: 100,
    backgroundColor: '#F4F4F4',
    borderRadius: 4,
    right: 2,
    top: 2
  },
  shortDesc: {},
  recipeTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  kcalAndTime: {
    flexDirection: "row",
  },
  data: {
    flexDirection: "row",
  },
  dataText: {
    color: "#868686",
    marginLeft: 2,
  },
  dataSeparator: {
    color: "#868686",
    marginHorizontal: 5,
  },
});
