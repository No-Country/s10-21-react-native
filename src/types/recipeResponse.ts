export interface RecipeProps {
  uri: string;
  label: string;
  image: string;
  images: {};
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: { text: string; weight: number }[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: {
    [key: string]: { label: string; quantity: number; unit: string };
  };
  totalDaily: {
    [key: string]: { label: string; quantity: number; unit: string };
  };
  digest: {
    label: string;
    tag: string;
    schemaOrgTag: string;
    total: number;
    hasRDI: boolean;
    daily: number;
    unit: string;
    sub: any[];
  }[];
}

export interface HitsProps {
  recipe: RecipeProps;
}

export interface recipeResponseProps {
  from: number;
  to: number;
  count: number;
  _links: any;
  hits: HitsProps[];
}
