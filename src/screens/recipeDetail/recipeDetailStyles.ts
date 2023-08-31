import { StyleSheet } from "react-native";

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
  description: {
    fontSize: 18,
    color: "#5E5E5E",
  },
  nutritionalData: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    width: '100%'
  },
  dataContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "45%",
    gap: 5
  },
  dataIcon: {
    height:45,
    width: 45,
    borderRadius: 10,
    backgroundColor: '#c1c1c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataText: {
    fontSize: 18,
    color:'#575757',
    fontWeight: '600'
  },
  switchContainer: {
    marginTop: 20
  },
});
