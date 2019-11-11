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
import AppNavigatorState from './src/navigation/containers/app-navigator-state'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store'
import { InitLoading } from './src/general-components'

const App = () => {
  console.disableYellowBox = true
  
  return  <Provider store={store}>
            <PersistGate
                persistor={persistor}
                loading={<InitLoading></InitLoading>}
            >
                <AppNavigatorState />
            </PersistGate>
          </Provider>;
};

export default App;
