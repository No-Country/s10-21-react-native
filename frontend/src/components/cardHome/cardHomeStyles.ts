import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#F4F4F4",
    borderRadius: 15,
    width: "48%",
    height: 190,
    elevation: 6,
    // justifyContent: "space-between",    

  },
  imgContainer: {
    backgroundColor: 'green'
  },
  favoriteIcon: {
    backgroundColor: 'black'
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 15,
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
    marginLeft:2
  },
  dataSeparator:{
    color: "#868686",
    marginHorizontal: 5
  }
});
