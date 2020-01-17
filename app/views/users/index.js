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
import ModalComponent from '../../components/modal';

// Assets
import styles from './styles';

class Users extends Component {
	// static navigationOptions = ({ navigation }) => ({
	// 	headerRight: (
	// 		<TouchableOpacity
	// 			style={{ marginRight: 15 }}
	// 			onPress={() => console.log(navigation)}
	// 		>
	// 			<Icon name="add" color="red" size={28} />
	// 		</TouchableOpacity>
	// 	),
    // });

	constructor(props) {
		super(props);
		this.state = {
			users: [], 
			addModal: false,
			edit: false,
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
        this.getData();
	}

	setData(value, key) {
		const { user } = this.state;
		this.setState({ user: { ...user, [key]: value }})
	}

	getData() {
		UserApi.get().then(response => {
			if (response.data) {
				this.setState({ users: response.data });
			}
		});
	}

	cleanStates() {
		this.setState({
			addModal: false,
			edit: false,
			user: {
				username: '',
				email: '',
				name: '',
				role: 1,
				password: '',
			},
		})
	}

	sendData() {
		const { user, edit } = this.state;
		if (edit) {
			const userEdit = {
				username: user.username,
				email: user.email,
				name: user.name,
				role: user.role,
				password: user.password,
			}
			UserApi.put(userEdit, user.id).then(() => {
				this.getData();
				this.cleanStates();
			});
		} else {
			UserApi.post(user).then(response => {
				if (response.data) {
					this.getData();
					this.cleanStates();
				}
			});
		}
	}

	deleteData(id) {
		UserApi.delete(id).then(() => {
			this.getData();
		})
	}

	renderItem(item, index) {
		return (
			<View
				key={index}
				style={styles.itemInfo}
			>
				<View style={styles.containerInfo}>
					<Text>{item.name}</Text>
					<Text>{item.email}</Text>
				</View>
				<TouchableOpacity
					onPress={() => this.setState({ user: { ...item }, addModal: true, edit: true })}
				>
					<Icon name="edit" color="black" size={20} />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => this.deleteData(item.id)}
				>
					<Icon name="delete" color="red" size={20} />
				</TouchableOpacity>
			</View>
		)
	}

	render() {
		const { users, addModal, user, edit } = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.containerBtnAdd}>
					<TouchableOpacity
						style={{ marginRight: 15 }}
						onPress={() => this.setState({ addModal: true })}
					>
						<Icon name="add" color="red" size={28} />
					</TouchableOpacity>
				</View>
				<FlatList
					data={users}
					renderItem={({ item, index }) => this.renderItem(item, index)}
					keyExtractor={item => item.id}
				/>
				<ModalComponent
					visible={addModal}
					onClose={() => this.setState({ addModal: false })}
				>
					<TextInput
						onChangeText={username => this.setData(username, 'username')}
						style={styles.textInput}
						placeholder="Usuario"
						placeholderTextColor="#FFFFFF"
						value={user.username}
					/>
					<TextInput
						onChangeText={email => this.setData(email, 'email')}
						style={styles.textInput}
						placeholder="Email"
						placeholderTextColor="#FFFFFF"
						value={user.email}
					/>
					<TextInput
						onChangeText={name => this.setData(name, 'name')}
						style={styles.textInput}
						placeholder="Nombre"
						placeholderTextColor="#FFFFFF"
						value={user.name}
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
						onPress={() => this.sendData()}
					>
						<Text style={styles.textBtnSave}>S A V E</Text>
					</TouchableOpacity>
				</ModalComponent>
			</View>
		);
	}
}

export default Users;
