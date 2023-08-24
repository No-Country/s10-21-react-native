import React from 'react';
import { Text, View } from 'react-native';
import styles from './CategoryStyle';

type Props = {
	title: string;
	SvgComponent: any;
};

export const Category = ({ title, SvgComponent }: Props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{title}</Text>
			<View style={styles.svg}>
				<SvgComponent width={50} height={50} />
			</View>
		</View>
	);
};
