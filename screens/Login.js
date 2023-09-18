import React, { useState } from 'react';
import { View, Text, Image,TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';



const Login = ({ navigation }) => {
  const [nameEmail, setNameEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignup = () => {
    navigation.navigate('Account');
  };

  const handleLogin = () => {
    // Add login logic, API calls, authentication, etc.
    console.log('Email:', nameEmail);
    console.log('Password:', password);

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
        <Image
            source={require('../assets/images/SC.png')}
            style={styles.logoImage}
            resizeMode="contain"
        />

        <Text style={styles.title}>Login</Text>

        <TextInput
            style={styles.input}
            placeholder="Username / Email"
            onChangeText={(text) => setNameEmail(text)}
            value={nameEmail}
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={handleSignup}
        >
            <Text style={styles.signup}>Don't have an account? Sign up</Text>
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
    width: '100%',
    height: 50,
    borderColor: '#F1F0F0',
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  button: {
    padding: 15,
    paddingRight: 55,
    paddingLeft: 55,
    borderRadius: 50,
    backgroundColor: '#A98ADC',
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
    color: '#A98ADC',
    textDecorationLine: 'underline',
    fontSize: 14,
    fontStyle: 'italic',
    margin: 5
  }
});

export default Login;