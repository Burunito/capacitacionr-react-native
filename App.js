/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput, FlatList } from 'react-native';
import UsuarioItem from './src/usuario-item.js';
import Home from './src/home.js';

const App = () => {
  return <Home/>;
  /*
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Hola Mundo</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1}>
          <Text style={styles.title}>Texto 1</Text> 
        </View>
        <View style={styles.box2}> 
          <Text style={styles.title}>Texto 2</Text>
        </View>
      </View>
      <Image source={require('./assets/persona.png')} style={styles.image} />
      <TouchableOpacity onPress={() => alert('Test')} style={styles.btn}>
        <Text>
          Cliqueame
        </Text> 
      </TouchableOpacity>
      <Button title={'Cliqueame porfa'} onPress={() => alert('Test 2')}>
      </Button>
      <TextInput 
        placeholder="Nombre" 
        style={styles.input}
        placeholderTextColor='red'
        autoCapitalize='none'
        secureTextEntry={true}
        onChangeText={(text) => text.length > 4 && alert(text)}
      >
      </TextInput>
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
    </View>
  );
  */
};

const styles = StyleSheet.create({
  container : {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex:1 
  },
  text: {
    fontSize: 25
  },
  box1: {
    backgroundColor: 'cyan',
    flex: 3,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  box2: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  boxContainer:{
    flexDirection: 'row',
    height: 100
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue'
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'contain'
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#cccccc',
    marginTop: 10,
    borderRadius: 5
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

export default App;
