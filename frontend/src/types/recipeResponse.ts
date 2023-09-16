export interface IngredientsProps {
	food: string;
	foodCategory: string;
	foodId: string;
	image: string;
	measure: string;
	quantity: number;
	text: string;
	weight: number;
}

export interface totalNutrientsProps {
	[key: string]: { label: string; quantity: number; unit: string };
}

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
	ingredients: IngredientsProps[];
	calories: number;
	totalWeight: number;
	totalTime: number;
	cuisineType: string[];
	mealType: string[];
	dishType: string[];
	totalNutrients: totalNutrientsProps;
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
	_links: any;
}

export interface recipeResponseProps {
	from: number;
	to: number;
	count: number;
	_links: any;
	hits: HitsProps[];
}
