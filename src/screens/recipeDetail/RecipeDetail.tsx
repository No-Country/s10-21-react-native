import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import ScreenTitle from "../../components/screenTittle/ScreenTitle";
import { styles } from "./recipeDetailStyles";
import { FireIcon } from "../../../assets/Icons/SVGicons";
import SwitchSelector from "react-native-switch-selector";
import { RecipeDetailsOptions } from "../../types/recipeDetailsSwitch";

const options = [
  { label: "Ingredients", value: "ingredients" },
  { label: "Instructions", value: "instructions" },
];

const RecipeDetail = ({ route }) => {
  const [switchView, setSwitchView] =
    useState<RecipeDetailsOptions>("ingredients");

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <ScreenTitle text="Recipe Detail" backButton={true} />
      <View style={styles.containerRecipe}>
        <Image
          source={{
            uri: route.params?.recipe?.image,
          }}
          style={styles.image}
          accessibilityLabel="Recipe Image"
        />
        <View>
          <View style={styles.titleAndDesc}>
            <Text style={styles.title}>{route.params?.recipe?.label}</Text>
            <Text style={styles.description}>
              {route.params?.recipe?.cuisineType}
            </Text>
          </View>
          <View style={styles.nutritionalData}>
            <View style={styles.dataContainer}>
              <View style={styles.dataIcon}>
                <FireIcon color="#575757" />
              </View>
              <Text style={styles.dataText}>
                {route.params?.recipe?.calories.toFixed()} Kcal
              </Text>
            </View>

            <View style={styles.dataContainer}>
              <View style={styles.dataIcon}>
                <FireIcon color="#575757" />
              </View>
              <Text style={styles.dataText}>
                {route.params?.recipe?.totalNutrients?.CHOCDF?.label}{" "}
                {route.params?.recipe?.totalNutrients?.CHOCDF.quantity?.toFixed()}{" "}
                {route.params?.recipe?.totalNutrients?.CHOCDF.unit}
              </Text>
            </View>

            <View style={styles.dataContainer}>
              <View style={styles.dataIcon}>
                <FireIcon color="#575757" />
              </View>
              <Text style={styles.dataText}>
                {route.params?.recipe?.totalNutrients?.CHOLE?.label}{" "}
                {route.params?.recipe?.totalNutrients?.CHOLE.quantity?.toFixed()}{" "}
                {route.params?.recipe?.totalNutrients?.CHOLE.unit}
              </Text>
            </View>

            <View style={styles.dataContainer}>
              <View style={styles.dataIcon}>
                <FireIcon color="#575757" />
              </View>
              <Text style={styles.dataText}>
                {route.params?.recipe?.totalNutrients?.FATRN?.label}{" "}
                {route.params?.recipe?.totalNutrients?.FATRN.quantity?.toFixed()}{" "}
                {route.params?.recipe?.totalNutrients?.FATRN.unit}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.switchContainer}>
          <SwitchSelector
            onPress={(value: RecipeDetailsOptions) => setSwitchView(value)}
            initial={0}
            options={options}
            textColor={"black"}
            textStyle={{ fontSize: 20 }}
            selectedTextStyle={{ fontSize: 20 }}
            selectedColor={"#fff"}
            buttonColor={"#349BFF"}
            borderRadius={10}
            hasPadding
            accessibilityLabel="gender-switch-selector"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeDetail;
