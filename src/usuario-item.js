//Dummy
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function getImage(){
	const image = parseInt(1 + Math.random() * (4 - 1)).toString();
	const image_url = [
		require('../assets/persona.png'),
		require('../assets/persona1.png'),
		require('../assets/persona3.png'),
		require('../assets/persona4.png')
	];
	return image_url[image];
}

function UsuarioItem(props){
	const {id, nombre, edad, onDeleteItem, onShowItem} = props;
	return(
    <View style={styles.container}>
    	<View style={styles.imageContainer}>
    		<Image source={getImage()} style={styles.image} />
			</View>
			<Text style={styles.data}>{nombre}</Text>
			<Text style={styles.data}>{edad}</Text>
			<View style={styles.actionsContainer}>
				<TouchableOpacity 
					style={styles.icons}
					onPress={() => onShowItem(id)}
				>
					<View>
						<Icon
				      name='eye'
				      size={24}
				      color='blue'
				    />
					</View>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.icons} 
					onPress={() => onDeleteItem(id)}
				>
					<View>
						<Icon
				      name='trash'
				      size={24}
				      color='red'
				    />
					</View>
				</TouchableOpacity>
		 	</View>
		 </View>
	);
}

const styles = StyleSheet.create({
  container : {
  	borderRadius: 4,
  	borderWidth: 2,
  	borderColor: '#cccccc', 
  	width: 'auto',
  	height: 40,
  	flexDirection: 'row',
    justifyContent: 'space-around',
  	padding: 5
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  imageContainer: {
    flex: 1,
    resizeMode: 'contain'
  },
  image: {
    height: 25,
    width: 25,
    resizeMode: 'contain'
  },
  data:{
  	flex: 1
  },
  icons:{
  	flex: 1,
  	width: 30
  }
});

export default UsuarioItem; 