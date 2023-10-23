import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity,  Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';


const { width, height } = Dimensions.get("screen");


function BillingDetails () {

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
       
       <View style={styles.section}>
        <Image source={require('../../../assets/images/SC.png')} style={{ height: 100, width: 100 }}/>
        <Text style={{ fontSize: 18, fontWeight: 500, marginVertical: 10, padding: 10 }}>Contact Detail</Text>
        <TextInput
            style={styles.input}
            label="Name"
            value={name}
            onChangeText={text => setName(text)}
            mode='outlined'
            outlineColor='#9999'
            outlineStyle={{
                borderRadius: 8
            }}
            activeOutlineColor='#B7A8DF'
        />
        <TextInput
            style={styles.input}
            label="Contact"
            value={contact}
            keyboardType='numeric'
            onChangeText={text => setContact(text)}
            mode='outlined'
            outlineColor='#9999'
            outlineStyle={{
                borderRadius: 8
            }}
            activeOutlineColor='#B7A8DF'
        />
      </View>
      
      <View style={styles.section}>
        <Text style={{ fontSize: 18, fontWeight: 500, marginVertical: 10, padding: 10 }}>Delivery Address</Text>
        <TextInput
            style={styles.input}
            label="Address"
            value={address}
            onChangeText={text => setAddress(text)}
            mode='outlined'
            outlineColor='#9999'
            outlineStyle={{
                borderRadius: 8
            }}
            activeOutlineColor='#B7A8DF'
        />
        <TextInput
            style={styles.input}
            label="City"
            value={city}
            onChangeText={text => setCity(text)}
            mode='outlined'
            outlineColor='#9999'
            outlineStyle={{
                borderRadius: 8
            }}
            activeOutlineColor='#B7A8DF'
        />
        <TextInput
            style={styles.input}
            label="Postal Code"
            value={postalCode}
            keyboardType='numeric'
            onChangeText={text => setPostalCode(text)}
            mode='outlined'
            outlineColor='#9999'
            outlineStyle={{
                borderRadius: 8
            }}
            activeOutlineColor='#B7A8DF'
        />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'left',
    backgroundColor: '#FCFAFA',
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 8,
    marginTop: 20,
    width: width,
    shadowColor: '#9999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  input: {
    alignItems: 'left',
    // width: '100%',
    marginBottom: 8,
    marginHorizontal: 10,
    color: '#777',
    backgroundColor: 'transparent',
    fontSize:  14,
    overflowX: 'scroll',
  },
});


export {BillingDetails};
