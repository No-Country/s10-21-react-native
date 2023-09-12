import axios from 'axios';

const appDB = axios.create({
	baseURL: 'https://dishdetective.onrender.com/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default appDB;
