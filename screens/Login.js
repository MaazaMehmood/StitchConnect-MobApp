import React, { useState } from 'react';
import { View, Text, Image,TouchableOpacity, Keyboard,TouchableWithoutFeedback , StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';


function Login ({ navigation }) {
  
  const [nameEmail, setNameEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  
  const handleSignup = () => {
    navigation.navigate('Account');
  };

  const handleLogin = () => {
    // Add login logic, API calls, authentication, etc.

    console.log('Email:', nameEmail);
    console.log('Password:', password);
    console.log('Account type:', accountType);

    navigation.navigate('Home');
  };

  return (
    <>
    <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}>
      <View style={styles.container}>
          <Image
              source={require('../assets/images/SC.png')}
              style={styles.logoImage}
              resizeMode="contain"
          />

          <Text style={styles.title}>Login</Text>

          <TextInput
              style={styles.input}
              label="Username / Email"
              onChangeText={(text) => setNameEmail(text)}
              value={nameEmail}
              underlineColor='#9999'
              activeUnderlineColor='#9579E3'
          />
          <TextInput
              style={styles.input}
              label="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              underlineColor='#9999'
              activeUnderlineColor='#9579E3'
              secureTextEntry
          />
          <TextInput
              style={styles.input}
              label="Account type"
              onChangeText={(text) => setAccountType(text)}
              value={accountType}
              underlineColor='#9999'
              activeUnderlineColor='#9579E3'
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignup} >  
              <Text style={styles.signup}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
    </>
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
    position: 'relative',
    borderRadius:75,
    width: 110,
    height: 110,
    marginBottom: 50,
  },
  title: {
    letterSpacing: .5,
    fontSize: 26,
    marginBottom: 30,
  },
  input: {
    alignItems: 'left',
    width: '100%',
    marginBottom: 3,
    padding: 3,
    color: '#777',
    backgroundColor: 'transparent',
    fontSize:  15,
    overflowX: 'scroll'
  },
  button: {
    padding: 15,
    paddingRight: 55,
    paddingLeft: 55,
    borderRadius: 50,
    backgroundColor: '#9579E3',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 16,
  },
  signup: {
    color: '#9579E3',
    textDecorationLine: 'underline',
    fontSize: 14,
    fontStyle: 'italic',
    margin: 5
  }
});

export default Login;
