import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { RadioButton, TextInput, Divider } from 'react-native-paper';
import { CustomIcon } from '../../../components/CustomIcon';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("screen");


function BillingDetails ({ customerData }) {
  
  //Billing details
  const {contact, name} = customerData;
  console.log(customerData);

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
                  outlineColor='#CBC5DC'
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
                outlineColor='#CBC5DC'
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
                outlineColor='#CBC5DC'
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
        <View style={{ flexDirection: 'row', justifyContent: 'left', padding: 3}}>
          <CustomIcon iconName='person-circle-sharp' color='#9579E3' />
          <Text style={{ color: '#9579E3', fontSize: 26, fontWeight: '300', bottom: '2%'}}> {name} </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'left'}}>
          <FontAwesome name="phone" size={22} color="#9579E3" />
          <Text style={{ color: '#777', fontSize: 15 , fontWeight: '300', left: '40%'}}> {contact} </Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.title}> Delivery Address </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 3}}>
          <CustomIcon iconName='location' color='#9579E3' />
          <TextInput
              style={styles.input}
              label="Address"
              value={address}
              onChangeText={text => setAddress(text)}
              mode='underlined'
              underlineColor='#CBC5DC'
              activeUnderlineColor='#B7A8DF'
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 3}}>
        <MaterialIcons name="location-city" size={22} color="#9579E3" />
          <TextInput
              style={styles.input}
              label="City"
              value={city}
              onChangeText={text => setCity(text)}
              mode='underlined'
              underlineColor='#CBC5DC'
              activeUnderlineColor='#B7A8DF'
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 3}}>
          <MaterialIcons name="local-post-office" size={22} color="#9579E3" />
          <TextInput
              style={styles.input}
              label="Postal Code"
              value={postalCode}
              keyboardType='numeric'
              onChangeText={text => setPostalCode(text)}
              mode='underlined'
              underlineColor='#CBC5DC'
              activeUnderlineColor='#B7A8DF'
          />
        </View>
      </View>

      {/* payment details */}
        <View style={styles.section}>
          <Text style={styles.title}> Total Payment</Text>
          <View style={{flexDirection: 'col', justifyContent: 'center', marginVertical: 3}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, borderRadius: 8}}>
                <Text style={{fontSize: 14, margin: 3}}> Sub Total </Text>
                <Text style={{ fontWeight: '500', fontSize: 16}}>Rs. 688.7</Text>
            </View>
            <View style={{ backgroundColor: '#F9F8FC', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, padding: 10, borderRadius: 8}}>
                <Text style={{fontSize: 14, margin: 3}}> Total </Text>
                <Text style={{ fontWeight: '500', fontSize: 16}}>Rs. 2900</Text>
            </View>
          </View>
          <Divider/>
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

        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FCFAFA',
    padding : 2
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 8,
    marginTop: 3,
    width: width,
    shadowColor: '#9999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  title: {
    fontSize: 15,
    fontWeight: '500', 
    marginVertical: 5, 
    padding: 3,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  creditCardFields: {
    marginTop: 10,
    flexDirection: 'col',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    Left: '50%',
  },
  input: {
    alignItems: 'left',
    marginBottom: 2,
    color: '#777',
    backgroundColor: 'transparent',
    fontSize:  14,
    overflowX: 'scroll',
    width: '99%'
  },
  button: {
    padding: 15,
    paddingRight: 45,
    paddingLeft: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9579E3',
    margin: 10,
  },
  buttonText: {
    color: '#ffff',
    fontWeight: '500',
    fontSize: 14,
  },
});


export {BillingDetails};
