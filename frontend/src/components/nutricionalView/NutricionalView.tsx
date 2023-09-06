import React from "react";
import { Text, View } from "react-native";
import { totalNutrientsProps } from "../../types/recipeResponse";
import { styles } from "./nutritionalViewStyle";
import { DataTable } from "react-native-paper";

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

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.labelHeading}>Health label:</Text>
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
        <Text style={styles.labelHeading}>Total nutrients:</Text>
        <View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title
                textStyle={{ width: "100%", fontWeight: "800", fontSize: 20 }}
              >
                Label
              </DataTable.Title>
              <DataTable.Title
                textStyle={{
                  textAlign: "right",
                  width: "100%",
                  fontWeight: "800",
                  fontSize: 20,
                }}
              >
                Valor
              </DataTable.Title>
            </DataTable.Header>

            {nutrientArray
              .sort((a, b) => a.label.localeCompare(b.label))
              .map((item) => (
                <DataTable.Row key={item.nutrientCode}>
                  <DataTable.Cell>{item.label}</DataTable.Cell>
                  <DataTable.Cell numeric>
                    {item.quantity.toFixed()}
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
          </DataTable>
        </View>
      </View>
    </View>
  );
};

export default NutricionalView;
