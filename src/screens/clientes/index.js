import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Clientes extends Component{
    constructor(props){
        super(props);

        this.state = {
            nombre: this.props.navigation.getParam('nombre', null)
        }
    }
    
    cambiarNombre = () => {
        this.props.dispatch({
            type: 'SET_CLIENTE',
            payload: {
                nombre: 'Jacinto'
            }
        });
    }

    navegaAServicios = () => this.props.navigation.navigate('Servicios');
    render(){
        const { nombre } = this.state, { nombreCliente } = this.props;
        
        return(
            <SafeAreaView style={styles.container}>
                <Text>CLIENTES</Text>
                <TouchableOpacity onPress={this.navegaAServicios}>    
                    <Text>Navegar a servicios</Text>
                </TouchableOpacity>
                <Text>{nombre}</Text>
                <TouchableOpacity onPress={this.cambiarNombre}>
                    <Text>Cambiar nombre</Text>
                </TouchableOpacity>
                <Text>Nombre: {nombreCliente}</Text>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function mapStateToProps(state){
    return {
        nombreCliente: state.cliente.nombre
    }
}

export default  connect(mapStateToProps)(Clientes);