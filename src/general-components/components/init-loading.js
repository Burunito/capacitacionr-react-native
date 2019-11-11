import React from 'react';
import { SafeAreaView, Text, StyleSheet, ActivityIndicator, View } from 'react-native';
function InitLoading(props){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
                <Text>Cargando...</Text>
                <ActivityIndicator color='black' size='small' style={{marginLeft: 10}}/>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default InitLoading;