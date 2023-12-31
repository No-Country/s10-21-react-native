import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import styles from './categoryStyle';

type Props = {
	title: string;
	SvgComponent: any;
	type?: 'mealType' | 'dishType';
};

export const Category = ({ title, SvgComponent, type }: Props) => {
	const { changeMealType } = useContext(AppContext);
	const navigator = useNavigation();
	const onPress = () => {
		if (type === 'mealType') {
			changeMealType(title);
			navigator.navigate('SearcherAndList' as never);
		}
	};

	return (
		<View style={styles.shadowBox}>
			<TouchableOpacity style={styles.container} onPress={onPress}>
				<Text style={styles.text}>{title}</Text>
				<SvgComponent width={40} height={40} />
			</TouchableOpacity>
		</View>
	);
};
