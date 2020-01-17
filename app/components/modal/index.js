// Dependencies
import React, { Component, Children } from 'react';
import {
	View,
	Modal,
	TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Icon from 'react-native-vector-icons/MaterialIcons';

// Assets
import styles from './styles';

class ModalComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

 	render() {
		const { visible, onClose, children } = this.props;
		return (
			<Modal
				visible={visible}
				animationType="fade"
				hardwareAccelerated
				transparent
			>
				<TouchableOpacity
					style={styles.container}
					onPress={() => onClose()}
					activeOpacity={1}
				>
					<View style={styles.containerModal}>
						<View style={styles.containerX}>
							<TouchableOpacity
								style={styles.btnClose}
								onPress={() => onClose()}
							>
								<Icon name="close" color="black" size={28} />
							</TouchableOpacity>
						</View>
						<View style={styles.containerInfo}>
							{children}
						</View>
					</View>
				</TouchableOpacity>
			</Modal>
		);
	}
}
ModalComponent.defaultProps = {
	visible: false,
	onClose: null,
	onSave: null
};
ModalComponent.propTypes = {
	visible: PropTypes.bool,
	onClose: PropTypes.func,
	onSave: PropTypes.func,
};
export default ModalComponent;
