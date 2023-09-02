import React from "react";
import { Text, View } from "react-native";
import { totalNutrientsProps } from "../../types/recipeResponse";
import { styles } from "./nutritionalViewStyle";

interface NutricionalViewProps {
  totalNutrients: totalNutrientsProps;
  healthLabels: string[];
  dietLabels: string[];
  cautions: string[];
}

const NutricionalView = ({
  totalNutrients,
  healthLabels,
  dietLabels,
  cautions,
}: NutricionalViewProps) => {
  const nutrientArray = Object.keys(totalNutrients).map((key) => ({
    nutrientCode: key,
    ...totalNutrients[key],
  }));
  console.log(nutrientArray);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.labelHeading}>Labels:</Text>
        <View style={styles.labelContainer}>
          {healthLabels.sort().map((healthLabel, index) => (
            <Text key={index} style={styles.labelPill}>
              {healthLabel}
            </Text>
          ))}
        </View>
      </View>
      {cautions.length > 0 && (
        <View>
          <Text style={styles.labelHeading}>Caution, contains:</Text>
          <View style={styles.labelContainer}>
            {cautions.map((caution, index) => (
              <Text style={styles.labelPillCaution}>{caution}</Text>
            ))}
          </View>
        </View>
      )}

      <View>
        <Text style={styles.labelHeading}>Nutrients:</Text>
        <View>
          {nutrientArray.map((totalNutrient, index) => (
            <View key={index} style={styles.containerNutrientsData}>
              <Text style={styles.nutrientLabel}>{totalNutrient.label}: </Text>
              <Text style={styles.nutrientValue}>
                {totalNutrient.quantity.toFixed()}
                {totalNutrient.unit}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default NutricionalView;
