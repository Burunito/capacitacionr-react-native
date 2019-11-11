import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Servicios extends Component{
    constructor(props){
        super(props);
    }

    navegaAClientes = () => this.props.navigation.navigate('Clientes', {nombre: 'Juanito'});

    render(){
        const { nombreCliente } = this.props;
        return(
            
            <SafeAreaView style={styles.container}>
                <Text>SERVICIOS</Text>
                <TouchableOpacity onPress={this.navegaAClientes}>    
                    <Text>Navegar a clientes</Text>
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

export default  connect(mapStateToProps)(Servicios);