import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './CategoryStyle';

type Props = {
	title: string;
	SvgComponent: any;
};

export const Category = ({ title, SvgComponent }: Props) => {
	const onPress = () => {
		// TODO: Cambiar listado de comida por el listado de la categoría
		console.log('Category pressed');
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
