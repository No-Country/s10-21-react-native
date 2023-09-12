import axios from 'axios';

const appDB = axios.create({
	baseURL: 'http://localhost:8012',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default appDB;
