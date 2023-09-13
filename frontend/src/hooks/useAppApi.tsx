import { useContext, useState } from 'react';
import appDB from '../api/appDB';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../context/AppContext';

export const useAppApi = () => {
	const [token, setToken] = useState<string | null>(null);
	const [user, setUser] = useState<{}>(null);
	const { getAllData } = useContext(AppContext);
	const login = async (idTokenGoogle: string) => {
		try {
			const response = await appDB.post('/auth/google', { id_token: idTokenGoogle });
			const { token, data } = response.data;
			// save token to async storage
			await AsyncStorage.setItem('token', token);
			await AsyncStorage.setItem('user', JSON.stringify(data));
			// set token to state
			setToken(token);
			setUser(data);
			// set login data to context
			getAllData();
		} catch (error) {
			console.error(error);
		}
	};

	return {
		token,
		user,
		login,
	};
};
