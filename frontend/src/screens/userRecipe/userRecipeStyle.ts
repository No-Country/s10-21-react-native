import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  userRecipeContainer: {
    height: '100%',
    backgroundColor: '#fff',
    padding: 30
  },
  text:{
    fontSize:20
  },
  cardContainer: {
    padding: 10,
    backgroundColor: "#F4F4F4",
    borderRadius: 15,
    width: "48%",
    elevation: 4,
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
  TextContainer: {
    display: "flex",
    flex: 1,
    alignContent: "space-between", 
    justifyContent: "space-between",

  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: "500",
    alignSelf: 'flex-start',
    textAlignVertical: "top"
  },
  kcalAndTime: {
    flexDirection: "row",
  },
  data: {
    flexDirection: "row",
  },
  dataText: {
    color: colors.purpleLight,
    marginLeft: 2,
  },
  dataSeparator: {
    color: colors.purpleLight,
    marginHorizontal: 5,
  },
  ListFooterComponent:{
    padding: 10
  },
  noRecipeMesssage: {
    backgroundColor: "#fff",
    flex: 1,
    fontSize:20,
    paddingTop: 30,
    textAlign: 'center'
  }
});
