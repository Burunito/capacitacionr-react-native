//SMART COMPONENT
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TextInput} from 'react-native';
import UsuarioItem from './usuario-item.js';
import _ from 'lodash';
import { Button, Input, Overlay, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
//import Moment from 'react-moment';

class Home extends Component {
	constructor(props){
		super(props);
		this.nombre = React.createRef();
		this.edad = React.createRef();
		this.descripcion = React.createRef();
		this.nombreError = React.createRef();
		this.edadError = React.createRef();

		this.state = {
			usuarios: [{id:1,nombre:'test',edad:19, fecha: moment().format('YYYY-MM-DD H:i:s')}],
      nombre: null,
      edad: null,
      errorNombre: null,
      errorEdad: null,
      isVisible: false,
      fecha: null,
      errors: {
      	nombre: {
      		status: false,
      		message: null
      	}
      }
		}
	}

	onAddItem = () => {
		if(this.state.errorNombre)
			return;

		if(this.state.errorEdad)
			return;

		if(!this.state.nombre){
			alert('Nombre es obligatorio');
			return;
		}

		if(!this.state.edad){
			alert('Nombre es obligatorio');
			return;
		}

		const { usuarios } = this.state, cUsuarios = _.cloneDeep(usuarios);
		const idNuevo = 1 + Math.random() * (100 - 1);
		cUsuarios.push({
			id: idNuevo, 
			nombre: this.state.nombre, 
			edad: this.state.edad,
			descripcion: this.state.descripcion,
			fecha: moment().format('YYYY-MM-DD H:i:s')
		});

		this.setState({usuarios: cUsuarios, nombre: null, edad: null, descripcion: null, errorNombre: null, errorEdad: null});
	}

	onDeleteItem = (id) => {
		const { usuarios } = this.state, cUsuarios = _.cloneDeep(usuarios);
		let busqueda;
		busqueda = _.findIndex(this.state.usuarios, ['id', id]);
		cUsuarios.splice(busqueda, 1);
		this.setState({usuarios: cUsuarios});
	}

	onShowItem = (id) => {
		const { usuarios } = this.state;
		let usuario;
		usuario = _.find(this.state.usuarios, ['id', id]);
		this.setState({
				nombre: usuario.nombre,
				edad: usuario.edad,
				descripcion: usuario.descripcion,
				isVisible: true,
				fecha: usuario.fecha
		});
	}

	onPressItem = (id) => {
		alert(id);
	}

	handleChangeNombre = (event) => {
		const value = event.nativeEvent.text;
		let errorNombre = null, busqueda;

		if(!value){
			errorNombre = 'El nombre es obligatorio';
		}
		else{
			busqueda = _.findIndex(this.state.usuarios, ['nombre', value]);
			if(busqueda != -1)
				errorNombre = 'El nombre ya se encuentra registrado';
			if(value.length > 15)
				errorNombre = 'Debe ser menor a 15 caracteres';
		}

		
		this.setState({errorNombre:errorNombre, nombre: value});
	}

	handleChangeEdad = (event) => {
		const value = event.nativeEvent.text;
		let errorEdad = null;

		if(value){
			if(isNaN(value))
				errorEdad = 'El campo edad debe de ser un número';
		}
		
		this.setState({errorEdad:errorEdad, edad: value});
	}

	handleChangeDescripcion = (event) => {
		const value = event.nativeEvent.text;
		
		this.setState({descripcion: value});
	}

	onChange = (field, value) => this.setState({ [field] : value})

	render(){
		const { usuarios, nombre, edad, descripcion, errorNombre, errorEdad, fecha, errors } = this.state;
		return(
			<SafeAreaView style={styles.container}>
				<Input
					name='nombre'
				  placeholder='Nombre'
				  onChange={this.handleChangeNombre}
				  value={nombre}
				  leftIcon={
				    <Icon
				      name='user'
				      size={24}
				      color='grey'
				    />
				  }
				/>
				{errors.nombre.status && <Text style={styles.msgError}>{errors.nombre.message}</Text>}
				<Input
					name='edad'
				  onChangeText={(text) => this.onChange('edad', text)}
				  placeholder='Edad'
				  keyboardType='numeric'
				  value={edad}
				  leftIcon={
				    <Icon
				      name='birthday-cake'
				      size={24}
				      color='grey'
				    />
				  }
				/>
				<Text style={styles.msgError}>{errorEdad}</Text>
				<Input
					name='descripcion'
				  onChange={this.handleChangeDescripcion}
				  placeholder='Descripción'
				  value={descripcion}
				  leftIcon={
				    <Icon
				      name='clipboard'
				      size={24}
				      color='grey'
				    />
				  }
				/>
				<View
	      	style={styles.boton}
		    >  
		    	<Button
					  icon={
					    <Icon
					      name="save"
					      size={15}
					      color="white"
					    />
					  }
					  onPress={this.onAddItem}
					  title="Guardar"
					/>
				</View>
				<View
					style={styles.encabezados}
				>
					<Text style={styles.encabezadoTexto}>{'Avatar'}</Text>
					<Text style={styles.encabezadoTexto}>{'Nombre'}</Text>
					<Text style={styles.encabezadoTexto}>{'Edad'}</Text>
					<Text style={styles.encabezadoTexto}>{'Acciones'}</Text>
				</View>
				<FlatList
        data={ usuarios }
	        renderItem={({item}) => <UsuarioItem {...item} onShowItem={this.onShowItem} onDeleteItem={this.onDeleteItem}/>}
	        keyExtractor={ item => item.id.toString() }
	        style={{marginTop:5}}
	      />
	      <Overlay
				  isVisible={this.state.isVisible}
				  onBackdropPress={() => this.setState({ isVisible: false })}
				>
					<View
						style={styles.modal}
					>
						<View
							style={styles.fields}
						>
							<Text style={styles.label}>{'Nombre: '}</Text>
							<Text style={styles.display}>{nombre}</Text>
						</View>
						<View
							style={styles.fields}
						>
							<Text style={styles.label}>{'Edad: '}</Text>
							<Text style={styles.display}>{edad}</Text>
						</View>
						<View
							style={styles.fields}
						>
							<Text style={styles.label}>{'Descripción: '}</Text>
							<Text style={styles.display}>{descripcion}</Text>
						</View>
						<View
							style={styles.fields}
						>
							<Text style={styles.label}>{'Fecha: '}</Text>
							<Text style={styles.display}>{fecha}</Text>
						</View>
					</View>
				</Overlay>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		flexDirection: 'column',
		padding: 5,
  	borderRadius: 4,
  	borderWidth: 2,
  	borderColor: '#cccccc',
  	backgroundColor: '#cfffe2'
	},
	fields: {
		height: 60,
		flexDirection: 'row',
		padding: 5,
	},
	container: {
		flex: 1,
		padding: 1
	},
	input: {
    height: 50,
    width: 200,
    backgroundColor: '#ECC342',
    borderRadius: 5,
    marginTop: 5,
    paddingLeft: 10
  },
  msgError: {
  	color: 'red',
  	textAlign:'center'
  },
  label: {
  	color: 'black',
  	fontWeight: 'bold',
  	fontSize: 20,
  	textAlign:'center'
  },
  display: {
  	color: 'grey',
  	fontSize: 16,
  	textAlign:'center'
  },
  boton: {
  	padding: 10,
  	justifyContent: 'center', 
    alignItems: 'center',
  	width: 'auto'
  },
  encabezados: {
  	flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'flex-end'
  },
  encabezadoTexto: {
  	flex: 1,
  	fontWeight: 'bold',
  	justifyContent: 'flex-end', 
    alignItems: 'flex-end'
  }
});

export default Home;