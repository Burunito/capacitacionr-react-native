//SMART COMPONENT
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TextInput} from 'react-native';
import UsuarioItem from './usuario-item.js';
import _ from 'lodash';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
	constructor(props){
		super(props);

		this.state = {
			usuarios: [
        {id: 1, nombre: 'Juan', edad: 23},
        {id: 2, nombre: 'Jose', edad: 21},
        {id: 3, nombre: 'Jacinto', edad: 20}
      ],
      nombre: ''
		}
	}

	componentDidMount(){
		//Se hacen llamadas a la api
		//Cargar datos del servidor
	}

	componentWillMount(){
		//Cuando el componennte va a desaparecer

	}

	onAddItem = (id) => {
		const { usuarios } = this.state, cUsuarios = _.cloneDeep(usuarios);
		const idNuevo = Math.floor(Math.random(10000) + 100);
		cUsuarios.push({id: idNuevo, nombre: 'Juanito ' + idNuevo, edad: idNuevo + 1});
		this.setState({usuarios: cUsuarios});
	}

	onPressItem = (id) => {
		alert(id);
	}

	render(){
		const { usuarios, nombre } = this.state;
		return(
			<SafeAreaView style={styles.container}>
				<TextInput 
	        placeholder="Nombre" 
	        style={styles.input}
	        placeholderTextColor='red'
	        autoCapitalize='none'
	        onChangeText={(text) => this.setState({nombre: text})}
	        value={nombre}
	      />
	      <Text>{nombre}</Text>
	      <Button
				  icon={
				    <Icon
				      name="arrow-right"
				      size={15}
				      color="white"
				    />
				  }
				  title="Button with icon component"
				/>
				<FlatList
        data={ usuarios }
	        renderItem={({item}) => <UsuarioItem {...item} onPress={this.onAddItem}/>}
	        keyExtractor={ item => item.id.toString() }
	        style={{marginTop:5}}
	      />
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	input: {
    height: 50,
    width: 200,
    backgroundColor: '#ECC342',
    borderRadius: 5,
    marginTop: 5,
    paddingLeft: 10
  }
});

export default Home;