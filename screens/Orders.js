import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function Orders() {
  return (
    <View style={styles.container} >
        <Text>Orders screen</Text>
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

export default Orders;