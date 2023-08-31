import React from 'react';
import { StyleSheet, View } from 'react-native';

import { categoryList } from '../mockData/categories';
import { Category } from '../components/Cards/Category';
import ScreenTitle from '../components/screenTittle/ScreenTitle';

export const CategoriesScreen = () => {
	return (
		<View style={styles.container}>
			<ScreenTitle text='Categories' />
			<View style={styles.list}>
				{categoryList.map((category) => {
					return (
						<Category
							key={category.id}
							title={category.title}
							SvgComponent={category.SvgComponent}
							type='mealType'
						/>
					);
				})}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: '#fff',
	},
	list: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		paddingVertical: 20,
	},
});
