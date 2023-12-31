import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import ScreenTitle from "../../components/screenTittle/ScreenTittle";
import { styles } from "./recipeDetailStyles";
import { ClockIcon } from "../../../assets/Icons/SVGicons";
import SwitchSelector from "react-native-switch-selector";
import { RecipeDetailsOptions } from "../../types/recipeDetailsSwitch";
import { RecipeProps } from "../../types/recipeResponse";
import { colors } from "../../utils/colors";
import { ReturnSwitchView } from "../../utils/SwitchDetailView";
import { A } from "@expo/html-elements";

const options = [
  { label: "Ingredients", value: "ingredients" },
  { label: "More info", value: "moreInfo" },
];

const RecipeDetail = ({ route }) => {
  const [switchView, setSwitchView] =
    useState<RecipeDetailsOptions>("ingredients");
  const {
    calories,
    totalNutrients,
    ingredients,
    label,
    image,
    totalTime,
    cautions,
    healthLabels,
    dietLabels,
    url,
    uri,
  } = route.params?.recipe as RecipeProps;

  const caloriesData = calories ? `${calories?.toFixed()} Kcal` : "N/A";

  const protein = totalNutrients?.PROCNT?.quantity
    ? `${totalNutrients?.PROCNT?.quantity.toFixed()}g`
    : "N/A";

  const carb = totalNutrients?.CHOCDF?.quantity
    ? `${totalNutrients?.CHOCDF?.quantity.toFixed()}g`
    : "N/A";

  const trans = totalNutrients?.FATRN?.quantity
    ? `${totalNutrients?.FATRN?.quantity.toFixed()}g`
    : "N/A";

  useEffect(() => {
    ReturnSwitchView;
  }, [switchView]);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <ScreenTitle text="Recipe Detail" backButton={true} />
      <View style={styles.containerRecipe}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
          accessibilityLabel="Recipe Image"
        />
        <View>
          <View style={styles.titleAndDesc}>
            <Text style={styles.title}>{label}</Text>
            <View style={styles.timeContainer}>
              <ClockIcon color={colors.orange} />
              <Text style={styles.description}>
                {totalTime > 0 ? `${totalTime} min` : "Not specified"}
              </Text>
            </View>
          </View>
          <View style={styles.nutritionalData}>
            <View style={styles.dataContainer}>
              <Image
                source={require("../../../assets/Icons/fireIcon.png")}
                style={styles.dataIcon}
              />
              <Text style={styles.dataText}>{caloriesData}</Text>
            </View>

            <View style={styles.dataContainer}>
              <Image
                source={require("../../../assets/Icons/eggIcon.png")}
                style={styles.dataIcon}
              />
              <Text style={styles.dataText}>
                {totalNutrients?.PROCNT?.label} {protein}
              </Text>
            </View>

            <View style={styles.dataContainer}>
              <Image
                source={require("../../../assets/Icons/wheatIcon.png")}
                style={styles.dataIcon}
              />
              <Text style={styles.dataText}>
                {totalNutrients?.CHOCDF?.label} {carb}
              </Text>
            </View>

            <View style={styles.dataContainer}>
              <Image
                source={require("../../../assets/Icons/PizzaIcon.png")}
                style={styles.dataIcon}
              />
              <Text style={styles.dataText}>
                {totalNutrients?.FATRN?.label} {trans}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.switchContainer}>
          <SwitchSelector
            onPress={(value: RecipeDetailsOptions) => setSwitchView(value)}
            initial={0}
            options={options}
            textColor={colors.orange}
            textStyle={{ fontSize: 20 }}
            selectedTextStyle={{ fontSize: 20 }}
            selectedColor={colors.orangeLight}
            buttonColor={colors.purple}
            borderRadius={10}
            hasPadding
            accessibilityLabel="gender-switch-selector"
          />
          {ReturnSwitchView({
            cautions,
            dietLabels,
            healthLabels,
            ingredients,
            switchView,
            totalNutrients,
          })}
        </View>
      </View>
      <TouchableOpacity style={styles.linkContainer}>
        <Image style={styles.touchIcon} source={require("../../../assets/Icons/touchIcon.png")} />
        <A href={url} style={styles.Link}>See instructions here</A>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RecipeDetail;
