import IngredientsList from "../components/ingredientsList/IngredientsList";
import NutricionalView from "../components/nutricionalView/NutricionalView";
import { IngredientsProps } from "../types/recipeResponse";

interface ReturnSwitchViewProps {
  switchView: "ingredients" | "moreInfo";
  ingredients: IngredientsProps[];
  cautions: string[];
  totalNutrients: {
    [key: string]: { label: string; quantity: number; unit: string };
  };
  dietLabels: string[];
  healthLabels: string[];
}

export const ReturnSwitchView = ({
  switchView,
  ingredients,
  cautions,
  totalNutrients,
  dietLabels,
  healthLabels,
}: ReturnSwitchViewProps) => {
  switch (switchView) {
    case "ingredients":
      return <IngredientsList ingredients={ingredients} />;

    case "moreInfo":
      return (
        <NutricionalView
          cautions={cautions}
          totalNutrients={totalNutrients}
          dietLabels={dietLabels}
          healthLabels={healthLabels}
        />
      );

    default:
      break;
  }
};
