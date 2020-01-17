// Dependencies
import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserApi from '../../api/users';

// Components
import Modal from '../../components/modal';

// Assets
import styles from './styles';

// Const
class Users extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerRight: (
			<TouchableOpacity
				style={{ marginRight: 15 }}
				onPress={() => navigation.state.params.openModal()}
			>
				<Icon name="add" color="red" size={28} />
			</TouchableOpacity>
		),
    });

	constructor(props) {
		super(props);
		this.state = {
			users: [],
			addModal: false,
			user: {
				username: '',
				email: '',
				name: '',
				role: 1,
				password: '',
			}
		};
	}

	componentDidMount() {
		const { navigation } = this.props;
        const params = {
			openModal: () => this.setState({ addModal: true }),
		};
		navigation.setParams(params);
        this.getData();
	}

	setData(value, key) {
		const { user } = this.state;
		this.setState({ user: { ...user, [key]: value }})
	}

	getData() {
		UserApi.get().then((response) => {
			if (response.data) {
				this.setState({ users: response.data });
			}
		});
	}

	renderItem(item, index) {
		return (
			<TouchableOpacity
				key={index}
				style={styles.itemInfo}
			>
				<View style={styles.containerInfo}>
					<Text>{item.name}</Text>
					<Text>{item.email}</Text>
				</View>
				<Icon name="edit" color="black" size={28} />
			</TouchableOpacity>
		)
	}

	render() {
		const { users, addModal, user } = this.state;
		return (
			<View style={styles.container}>
				<FlatList
					data={users}
					renderItem={({ item, index }) => this.renderItem(item, index)}
					keyExtractor={item => item.id}
				/>
				<Modal
					visible={addModal}
					onClose={() => this.setState({ addModal: false })}
				>
					<TextInput
						onChangeText={username => this.setData(username, 'username')}
						style={styles.textInput}
						placeholder="Usuario"
						placeholderTextColor="#FFFFFF"
					/>
					<TextInput
						onChangeText={email => this.setData(email, 'email')}
						style={styles.textInput}
						placeholder="Email"
						placeholderTextColor="#FFFFFF"
					/>
					<TextInput
						onChangeText={name => this.setData(name, 'name')}
						style={styles.textInput}
						placeholder="Nombre"
						placeholderTextColor="#FFFFFF"
					/>
					<TextInput
						onChangeText={password => this.setData(password, 'password')}
						style={styles.textInput}
						placeholder="Contraseña"
						placeholderTextColor="#FFFFFF"
						secureTextEntry
					/>
					<TouchableOpacity
						style={styles.btnSave}
						activeOpacity={0.7}
						onPress={() => console.log(user)}
					>
						<Text style={styles.textBtnSave}>S A V E</Text>
					</TouchableOpacity>
				</Modal>
			</View>
		);
	}
}

export default Users;
