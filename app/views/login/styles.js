// Dependencies
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	subContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imgLogo: {
		width: 250,
		height: 150,
	},
	textInput: {
		backgroundColor: 'rgb(45, 167, 131)',
		width: '90%',
		height: 50,
		borderRadius: 10,
		color: '#FFFFFF',
		paddingHorizontal: 10,
		marginVertical: 5,
	},
	btnLogin: {
		width: '90%',
		height: 50,
		backgroundColor: 'rgb(232, 159 ,31)',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 25,
		borderRadius: 10
	},
	textBtnLogin: {
		color: '#FFFFFF',
		fontSize: 16
	}
});
