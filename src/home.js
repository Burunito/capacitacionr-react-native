//SMART COMPONENT
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import UsuarioItem from './usuario-item.js'
class Home extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<SafeAreaView style={styles.container}>
				<FlatList
        data={[
          {id: 1, nombre: 'Juan', edad: 23},
          {id: 2, nombre: 'Jose', edad: 21},
          {id: 3, nombre: 'Jacinto', edad: 20}
        ]}
	        renderItem={({item}) => <UsuarioItem {...item}/>}
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
	}
});

export default Home;