import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shadowBox: {
    overflow: "hidden",
    paddingBottom: 5,
    marginBottom: 5,
    borderRadius: 15,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F6F6F6F6",
    width: 300,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,

    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 5,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
