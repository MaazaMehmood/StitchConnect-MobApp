import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { RadioButton } from 'react-native-paper';


const { width, height } = Dimensions.get("screen");


function Payment () {

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
                placeholder="Card Number"
                value={cardNo}
                onChangeText={(text) => setCardNo(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Expiration (MM/YY)"
                value={expiration}
                onChangeText={(text) => setExpiration(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Card Code"
                value={cardCode}
                onChangeText={(text) => setCardCode(text)}
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
      <View style={styles.paymentOptions}>

        <View style={{margin: 10}}>
            {/* <Text style={styles.title}>Payment</Text> */}
            <View style={{ backgroundColor: '#C5B8E7', flexDirection: 'row', justifyContent: 'space-between', margin: 0, padding: 10, borderRadius: 10}}>
                <Text style={{fontSize: 14, margin: 3}}> Total </Text>
                <Text style={{ fontWeight: '500', fontSize: 16}}>PKR 2900</Text>
            </View>
        </View> 
        
        <View style={styles.section}>
            <Text style={styles.title}>Payment Method</Text>
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

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 8,
    marginTop: 5,
    width: width,
    // height: ,
    shadowColor: '#9999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  paymentOptions: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '500', 
    marginVertical: 15, 
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
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


export {Payment};
