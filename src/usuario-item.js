//Dummy
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function UsuarioItem(props){
	const {id, nombre, edad, onPress} = props;
	return(
		<TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
			<Text>{nombre}</Text>
			<Text>{edad}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
  container : {
  	width: 300,
  	height: 60,
  	flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default UsuarioItem; 