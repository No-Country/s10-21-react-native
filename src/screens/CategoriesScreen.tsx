import React from 'react';
import { View } from 'react-native';

import { categoryList } from '../mockData/categories';
import { Category } from '../components/Cards/Category';

export const CategoriesScreen = () => {
	return (
		<View>
			{categoryList.map((category) => {
				return (
					<Category key={category.id} title={category.title} SvgComponent={category.SvgComponent} />
				);
			})}
		</View>
	);
};
