import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#F6F6F6',
		borderRadius: 10,
		padding: 10,
		margin: 10,
		width: 300,

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,

		elevation: 10,
	},

	text: {
		fontSize: 20,
		fontWeight: 'bold',
	},

	svg: {
		width: 50,
		height: 50,
	},
});

export default styles;
