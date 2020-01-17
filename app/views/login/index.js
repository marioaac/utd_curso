// Dependencies
import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
} from 'react-native';
// Components

// Assets
import styles from './styles';
import Logo from '../../assets/img/images.png';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.subContainer}>
					<Image
						style={styles.imgLogo}
						resizeMode="stretch"
						source={Logo}
					/>
				</View>
				<View style={styles.subContainer}>
					<TextInput
						onChangeText={(text) => console.log(text)}
						style={styles.textInput}
						placeholder="Usuario"
						placeholderTextColor="#FFFFFF"
					/>
					<TextInput
						onChangeText={(text) => console.log(text)}
						style={styles.textInput}
						placeholder="Password"
						placeholderTextColor="#FFFFFF"
						secureTextEntry
					/>
					<TouchableOpacity
						style={styles.btnLogin}
						activeOpacity={0.7}
						onPress={() => navigation.navigate('Users')}
					>
						<Text style={styles.textBtnLogin}>L O G I N</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default Login;
