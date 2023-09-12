import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const style = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 30,
    textAlign: "center",
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 10,
    bottom: 0,
    backgroundColor: "#CECECE",
    height: 35,
    width: 35,
    borderRadius: 100,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 111,
  },
  textHeader: {
    fontSize: 30,
    textAlign: "center",
    flexGrow: 1,
    fontWeight: "500",
  },
});
