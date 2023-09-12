import { useState } from 'react';
import appDB from '../api/appDB';

export const useAppApi = () => {
	const [token, setToken] = useState<string | null>(null);

	const login = async (idTokenGoogle: string ) => {
		try {
			const response = await appDB.post('/auth/google', { id_token: idTokenGoogle});
			// const { token } = response.data;
			// setToken(token);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	return {
		token,
		login,
	};
};
