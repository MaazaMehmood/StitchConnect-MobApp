import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Image, StyleSheet } from 'react-native';
import {RadioButton} from '../components/RadioButton';


function Account ({ navigation }) {
 
  const [accountType, setSAccountType] = useState('Customer Account');
  const accountOptions = ['Customer Account', 'Business Account'];

  const handleAccountChange = (option) => {
    setSAccountType(option);
     navigation.navigate('Signup',  { role : option });
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  }

  return (
       
    <View style={styles.container}>
      <Image
          source={require('../assets/images/SC.png')}
          style={styles.logoImage}
          resizeMode="contain"
      />

      <Text style={styles.title}>Sign Up</Text>

      <View >
          <RadioButton
              options={accountOptions}
              selectedOption={accountType}
              onSelect={handleAccountChange}
          />
      </View>

      <TouchableOpacity onPress={handleLogin}> 
        <Text style={styles.login}>Already have an account? login</Text>  
      </TouchableOpacity>
    </View>      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffff'
  },
  logoImage: {
    marginTop: '-45%',
    position: 'relative',
    borderRadius:75,
    width: 110,
    height: 110,
    marginBottom: 50,
  },
  title: {
    letterSpacing: .5,
    fontSize: 20,
    marginBottom: 10,
  },
  login: {
    color: '#9579E3',
    textDecorationLine: 'underline',
    fontSize: 14,
    fontStyle: 'italic',
    margin: 5
  }
});


export {Account};
