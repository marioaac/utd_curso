import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	containerModal: {
		height: '80%',
		width: '80%',
		backgroundColor: '#FFFFFF',
		padding: 5,
		borderRadius: 10,
	},
	containerInfo: {
		flex: 1,
		alignItems: 'center',
	},
	containerX: {
		width: '100%',
		height: '10%',
		marginTop: 10,
		marginRight: 10,
		alignItems: 'flex-end',
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	btnClose: {
		width: 50,
		height: 50,
		alignItems: 'flex-end',
	},
});

export default styles;
