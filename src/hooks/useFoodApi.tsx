const apiKey = '419e0112f3ac8276ea3abe718b1795c1';
const appId = '51983774';

const foodDB = axios.create({
	baseURL: `https://api.edamam.com/api/food-database/v2/parser?app_key=${apiKey}&app_id=${appId}&ingr=Burger%20King`,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default foodDB;
