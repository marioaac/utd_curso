// Dependencies
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Views
import Login from '../views/login';
import Users from '../views/users';

const MainNavigator = createStackNavigator({
	Login: {
		screen: Login,
		navigationOptions: {
			header: null,
		},
	},
	Users: {
		screen: Users,
		navigationOptions: {
			title: 'Usuarios',
		},
	},
});

const App = createAppContainer(MainNavigator);

export default App;