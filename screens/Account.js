import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Image, StyleSheet } from 'react-native';
import {RadioButton} from '../components/RadioButton';


function Account ({ navigation }) {
 
  const [accountType, setSAccountType] = useState('customer');
  const accountOptions = ['Customer ', 'Tailor'];

  const handleAccountChange = (option) => {
     setSAccountType(option);
     console.log(option);
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

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Text style={styles.login}>Already have an account?</Text>
        <TouchableOpacity onPress={handleLogin}  >  
            <Text style={[styles.login, { textDecorationLine: 'underline'}]}>Login</Text>
        </TouchableOpacity>
      </View>

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
    fontWeight: '400',
    letterSpacing: .5,
    fontSize: 20,
    marginBottom: 10,
  },
  login: {
    color: '#9579E3',
    fontSize: 14,
    fontStyle: 'italic',
  }
});


export {Account};
