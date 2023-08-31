import axios from 'axios';
import { app_id, app_key } from '@env';

const recipeDB = axios.create({
	baseURL: 'https://api.edamam.com/api/recipes/v2',
	params: {
		type: 'public',
		app_id: app_id,
		app_key: app_key,
		beta: 'true',
		random: 'true',
		cuisineType: 'South American',
	},
});

export default recipeDB;
