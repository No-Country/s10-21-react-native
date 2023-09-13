import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './cardRecipeStyles';
import { ClockIcon, FireIcon, HeartIcon } from '../../../assets/Icons/SVGicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamsList } from '../../types/homeStackParamsList';
import { HitsProps, RecipeProps } from '../../types/recipeResponse';
import { colors } from '../../utils/colors';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const CardHome = ({ ...data }: HitsProps) => {
	const navigation =
		useNavigation<NativeStackNavigationProp<HomeStackParamsList, 'RecipeDetail'>>();

	const { favorites, addFavorite } = useContext(AppContext);

	const saveFavorite = (data: HitsProps) => {
		console.log('Save favorite ' + data._links.self.href);
		addFavorite(data);
	};

	const isFavorite = () => {
		if (!favorites) return false;
		if (favorites.length !== 0) {
			const fav = favorites.find((fav) => fav.href === data._links.self.href);
			return !!fav;
		}
	};

	return (
		<TouchableOpacity
			style={styles.cardContainer}
			onPress={() => navigation.navigate('RecipeDetail', { ...data })}
		>
			<View style={styles.imgContainer}>
				<TouchableOpacity
					style={styles.favoriteIcon}
					//eslint-disable
					onPress={() => saveFavorite(data)}
				>
					<HeartIcon color={isFavorite() ? '#a83232' : '#000000'} />
				</TouchableOpacity>
				<Image
					resizeMode='cover'
					style={styles.image}
					source={{
						uri: data?.recipe?.image,
					}}
				/>
			</View>
			<View style={styles.TextContainer}>
				<Text style={styles.recipeTitle} numberOfLines={2} ellipsizeMode={'tail'}>
					{data?.recipe?.label}
				</Text>
				<View style={styles.kcalAndTime}>
					<View style={styles.data}>
						<View>
							<FireIcon color='#868686' size='15' />
						</View>
						<Text style={styles.dataText}>{data?.recipe?.calories.toFixed()} Cal</Text>
					</View>
					<Text style={styles.dataSeparator}>-</Text>
					<View style={styles.data}>
						<View>
							<ClockIcon color='#868686' size='15' />
						</View>
						<Text style={styles.dataText}>{data?.recipe?.totalTime} min</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default CardHome;
