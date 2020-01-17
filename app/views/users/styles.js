// Dependencies
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	itemInfo: {
		width: '100%',
		height: 80,
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomColor: '#CBCBCB',
		borderBottomWidth: 1,
	},
	containerInfo: {
		width: '80%',
		height: 80,
		justifyContent: 'center',
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
	btnSave: {
		width: '90%',
		height: 50,
		backgroundColor: 'rgb(232, 159 ,31)',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 25,
		borderRadius: 10
	},
	textBtnSave: {
		color: '#FFFFFF',
		fontSize: 16
	}
});
