import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function Notifications() {
  
  return (
    <View style={styles.container} >
        <Text>Notifications screen</Text>
    </ View>
  )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export {Notifications};