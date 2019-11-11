import React from 'react'
import { createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation'
import Home from '../../home'
import Servicios from '../../screens/servicios'
import Clientes from '../../screens/clientes'

const AppNavigator = createStackNavigator(
    {
        Main: {
            screen: createStackNavigator({
                Clientes,
                Servicios,
                Home,
            },
            {
                headerMode: 'none',
            })
        },
    },
    {
        initialRouteName: 'Main',
        backBehavior: 'initialRoute',
        headerMode: 'none'
    }
)
export default AppNavigator