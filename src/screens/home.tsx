import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import SearchHeader from "../components/searchHeader/SearchHeader";
import CardHome from "../components/CardHome";
   
const Home = () => {
  return (
    <View>
        <SearchHeader/>
        <CardHome/>
    </View>
  );
};

export default Home;
