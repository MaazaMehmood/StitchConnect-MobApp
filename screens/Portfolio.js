import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function Portfolio() {
  return (
    <View style={styles.container} >
        <Text>Portfolio screen</Text>
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

export default Portfolio;