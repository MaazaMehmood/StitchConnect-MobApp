import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView,  StyleSheet } from 'react-native';
import CustomIcon from '../../components/CustomIcon';


function Payment ({ navigation }) {

    // const handleSummary = () => {
    //     navigation.navigate('Order Summary')
    // }

    return (
        <ScrollView contentContainerStyle={styles.container} >
          <TouchableOpacity style={styles.card}
        //    onPress={handleSummary}
        >
            <CustomIcon  iconName='chevron-back-outline' color='#444'/>
            <Text>Order Summary</Text>
          </TouchableOpacity>
        </ ScrollView>
    ) ;
}


const styles = StyleSheet.create({
    container :{
        flexGrow: 1,
        justifyContent: 'start',  //center
        alignItems: 'center',
        backgroundColor: '#FCFAFA',
    },
    card: {
        flexDirection:'row',
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        padding: 30,
        width: '100%'
    }
});

export default Payment;