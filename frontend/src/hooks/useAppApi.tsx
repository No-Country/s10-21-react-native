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
			await AsyncStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTAwN2Q2OWI0MjQyYjQxMjUzOTY4N2YiLCJ1c2VyTmFtZSI6IllvbmEiLCJpYXQiOjE2OTQ2NTEyOTksImV4cCI6MTY5NDczNzY5OX0.QlRUOFLjcrs1c4L6akFvE08VZODiSAxhBO2xMskQaWw");
			await AsyncStorage.setItem('user', JSON.stringify(data));
			// set token to state
			setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTAwN2Q2OWI0MjQyYjQxMjUzOTY4N2YiLCJ1c2VyTmFtZSI6IllvbmEiLCJpYXQiOjE2OTQ2NTEyOTksImV4cCI6MTY5NDczNzY5OX0.QlRUOFLjcrs1c4L6akFvE08VZODiSAxhBO2xMskQaWw");
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
