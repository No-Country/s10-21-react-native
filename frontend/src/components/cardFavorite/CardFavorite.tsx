import { useState, useContext, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ClockIcon, FireIcon, HeartIcon } from '../../../assets/Icons/SVGicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamsList } from '../../types/homeStackParamsList';
import { AppContext, favoritesProps } from '../../context/AppContext';
import { styles } from './cardFavoriteStyles';
import axios from 'axios';

interface Props {
	data: favoritesProps;
}

const CardFavorite = ({ data }: Props) => {
	const navigation =
		useNavigation<NativeStackNavigationProp<HomeStackParamsList, 'RecipeDetail'>>();

	const [image, setImage] = useState('' as string);

	const { delFavorite } = useContext(AppContext);

	const deleteFavorite = (data: favoritesProps) => {
		console.log('Delete favorite ' + data._id);
		delFavorite(data._id);
	};

	const getDetailData = async (data: favoritesProps) => {
		await axios.get(data.href).then((response) => {
			navigation.navigate('RecipeDetail', { ...response.data });
		});
	};

	const getImage = async (data: favoritesProps) => {
		await axios.get(data.href).then((response) => {
			setImage(response.data.recipe.image);
		});
	};

	useEffect(() => {
		getImage(data);
	}, []);

	const fixedCalories = (calories: number) => {
		return Number(calories).toFixed(2);
	};

	return (
		<TouchableOpacity style={styles.cardContainer} onPress={() => getDetailData(data)}>
			<View style={styles.imgContainer}>
				<TouchableOpacity
					style={styles.favoriteIcon}
					//eslint-disable
					onPress={() => deleteFavorite(data)}
				>
					<HeartIcon color={'#a83232'} />
				</TouchableOpacity>
				<Image
					resizeMode='cover'
					style={styles.image}
					source={{
						uri: image,
					}}
				/>
			</View>
			<View style={styles.TextContainer}>
				<Text style={styles.recipeTitle} numberOfLines={2} ellipsizeMode={'tail'}>
					{data?.label}
				</Text>
				<View style={styles.kcalAndTime}>
					<View style={styles.data}>
						<View>
							<FireIcon color='#868686' size='15' />
						</View>
						<Text style={styles.dataText}>{data.calories} Cal</Text>
					</View>
					<Text style={styles.dataSeparator}>-</Text>
					<View style={styles.data}>
						<View>
							<ClockIcon color='#868686' size='15' />
						</View>
						<Text style={styles.dataText}>{fixedCalories(data.calories)} min</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default CardFavorite;
