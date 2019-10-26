//Dummy
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function UsuarioItem(props){
	const {nombre, edad} = props;
	return(
		<View style={styles.container}>
			<Text>{nombre}</Text>
			<Text>{edad}</Text>
		</View>
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