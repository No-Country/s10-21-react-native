import appDB from '../api/appDB';
import { favoritesProps } from '../context/AppContext';

export const useAppApi = () => {
	const login = async (idTokenGoogle: string) => {
		try {
			const response = await appDB.post('/auth/google', { id_token: idTokenGoogle });
			return response.data;
		} catch (error) {
			console.error(error);
			return error;
		}
	};

	const postFavorite = async (data: favoritesProps, token: string) => {
		try {
			const response = await appDB.post('/favourites', data, {
				headers: { ['x-token']: token },
			});
			console.log(response.data.msg);
			return response.data;
		} catch (error) {
			return error.response.data;
		}
	};

	const getAllFavorites = async (token: string) => {
		try {
			const response = await appDB.get('/favourites', {
				headers: { ['x-token']: token },
			});
			return response.data;
		} catch (error) {
			return error.response.data;
		}
	};

	return {
		login,
		postFavorite,
		getAllFavorites,
	};
};
