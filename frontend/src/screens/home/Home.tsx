import { View, ScrollView } from "react-native";
import SearchHeader from "../../components/searchHeader/SearchHeader";
import { styles } from "./homeStyles";
import CardHome from "../../components/cardHome/CardHome";
import { FireIcon } from "../../../assets/Icons/SVGicons";

const Home = () => {
  return (
    <View style={styles.container}>
      <SearchHeader />
      <ScrollView>
        <View style={styles.recipeList}>
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
