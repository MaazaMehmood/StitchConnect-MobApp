import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';


const { width, height } = Dimensions.get("screen");


function BillingDetails () {
  
  //Billing details
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  
  //Payment details
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [cardNo, setCardNo] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cardCode, setCardCode] = useState('');


  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };


  const renderCreditCardFields = () => {
    if (paymentMethod === 'CreditCard') {
      return (
        <View style={styles.creditCardFields}>
            <TextInput
                style={styles.input}
                label="Card Number"
                value={cardNo}
                onChangeText={(text) => setCardNo(text)}
                mode='outlined'
                outlineColor='#9999'
                outlineStyle={{
                    borderRadius: 8
                }}
                activeOutlineColor='#B7A8DF'
            />
            <TextInput
                style={styles.input}
                label="Expiration (MM/YY)"
                value={expiration}
                onChangeText={(text) => setExpiration(text)}
                mode='outlined'
                outlineColor='#9999'
                outlineStyle={{
                    borderRadius: 8
                }}
                activeOutlineColor='#B7A8DF'
            />
            <TextInput
                style={styles.input}
                label="Card Code"
                value={cardCode}
                onChangeText={(text) => setCardCode(text)}
                mode='outlined'
                outlineColor='#9999'
                outlineStyle={{
                    borderRadius: 8
                }}
                activeOutlineColor='#B7A8DF'
            />
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Pay Now</Text>
            </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  return (
    <ScrollView style={styles.container}>
      
      {/* billing details */}
      <View style={styles.section}>
        <Text style={styles.title}> Contact Detail </Text>
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
        <Text style={styles.title}> Delivery Address </Text>
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

      {/* payment details */}
      <View style={styles.section}>
          <Text style={styles.title}> Payment Method </Text>
          <RadioButton.Group onValueChange={(value) => handlePaymentChange(value)} value={paymentMethod}>
              <View style={styles.radioOption}>
                  <RadioButton value="COD" />
                  <Text>Cash on Delivery (COD)</Text>
              </View>
              <View style={styles.radioOption}>
                  <RadioButton value="EasyPaisa" />
                  <Text>EasyPaisa</Text>
              </View>
              <View style={styles.radioOption}>
                  <RadioButton value="JazzCash" />
                  <Text>JazzCash</Text>
              </View>
              <View style={styles.radioOption}>
                  <RadioButton value="CreditCard" />
                  <Text>Credit Card</Text>
              </View>
          </RadioButton.Group>
          {renderCreditCardFields()}

          <View style={{flexDirection: 'col', justifyContent: 'center', marginVertical: 40}}>
            <View style={{ backgroundColor: '#C5B8E7', flexDirection: 'row', justifyContent: 'space-between', margin: 3, padding: 10, borderRadius: 10}}>
                <Text style={{fontSize: 14, margin: 3}}> Sub Total </Text>
                <Text style={{ fontWeight: '500', fontSize: 16}}>PKR 688.7</Text>
            </View>
            <View style={{ backgroundColor: '#C5B8E7', flexDirection: 'row', justifyContent: 'space-between', margin: 5, padding: 10, borderRadius: 10}}>
                <Text style={{fontSize: 14, margin: 3}}> Total </Text>
                <Text style={{ fontWeight: '500', fontSize: 16}}>PKR 2900</Text>
            </View>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  title: {
    fontSize: 18,
    fontWeight: '500', 
    marginVertical: 15, 
    padding: 3,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  creditCardFields: {
    marginTop: 10,
  },
  input: {
    alignItems: 'left',
    marginBottom: 8,
    marginHorizontal: 10,
    color: '#777',
    backgroundColor: 'transparent',
    fontSize:  14,
    overflowX: 'scroll',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9579E3',
    margin: 10,
  },
  buttonText: {
    color: '#ffff',
    fontWeight: '500',
    fontSize: 16,
  },
});


export {BillingDetails};
