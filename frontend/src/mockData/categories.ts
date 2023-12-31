import Breakfast from '../assets/icons/Category-Breakfast.svg';
import Desserts from '../assets/icons/Category-Desserts.svg';
import Drinks from '../assets/icons/Category-Drinks.svg';
import Lunch from '../assets/icons/Category-Lunch.svg';
import Pastas from '../assets/icons/Category-Pastas.svg';
import Salads from '../assets/icons/Category-Salads.svg';
import Soups from '../assets/icons/Category-Soups.svg';
import Teatime from '../assets/icons/Category-Teatime.svg';

export interface Category {
	id: number;
	title: string;
	SvgComponent: React.FC;
}

export const categoryList: Category[] = [
	{
		id: 1,
		title: 'Breakfast',
		SvgComponent: Breakfast,
	},
	{
		id: 2,
		title: 'Dinner',
		SvgComponent: Desserts,
	},
	{
		id: 3,
		title: 'Lunch',
		SvgComponent: Lunch,
	},
	{
		id: 4,
		title: 'Snack',
		SvgComponent: Drinks,
	},
	{
		id: 5,
		title: 'Teatime',
		SvgComponent: Teatime,
	},
];
