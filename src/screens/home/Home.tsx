import { View, FlatList } from "react-native";
import SearchHeader from "../../components/searchHeader/SearchHeader";
import { styles } from "./homeStyles";
import CardHome from "../../components/cardHome/CardRecipe";

const data = [
  { id: "1", title: "Card 1" },
  { id: "2", title: "Card 2" },
  { id: "3", title: "Card 3" },
  { id: "3", title: "Card 3" },
  { id: "3", title: "Card 3" },
];
const Home = () => {
  return (
    <View style={styles.container}>
      <SearchHeader />

      <FlatList
        contentContainerStyle={{
          rowGap: 20,
          justifyContent: 'space-between',
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: 3
        }}
        data={data}
        renderItem={CardHome}
        keyExtractor={(item) => item.id}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
};

export default Home;
