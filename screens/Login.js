import React, { useState } from 'react';
import { View, Text, Image,TouchableOpacity, Keyboard,TouchableWithoutFeedback , StyleSheet } from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import { connect } from 'react-redux';
import { login } from '../store/userActions';


function Login ({ login ,  navigation }) {
  
  const [nameEmail, setNameEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  
  const handleSignup = () => {
    navigation.navigate('Account');
  };

  const handleLogin = () => {
    // login logic, API calls, authentication, etc.

    console.log({ nameEmail });
    console.log({ accountType });

    const user = { name: nameEmail, userType: accountType };
    console.log(user); 
    
    if (accountType)  {
      login(user);
      navigation.navigate('Home');
    }

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
              clearTextOnFocus={true}
              underlineColor='#9999'
              activeUnderlineColor='#9579E3'
          />
          <TextInput
              style={styles.input}
              label="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              clearTextOnFocus={true}
              underlineColor='#9999'
              activeUnderlineColor='#9579E3'
              secureTextEntry
          />
          <RadioButton.Group onValueChange={newValue => setAccountType(newValue)} value={accountType}  >
              <View  style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginRight: 150}}>
                <View style={{ flexDirection: 'row', justifyContent: 'start', alignItems: 'center'}} >
                  <RadioButton value="business" />
                  <Text style={{color: '#444'}}>Business</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'start', alignItems: 'center'}} >
                  <RadioButton value="customer" />
                  <Text style={{color: '#444'}}>Customer</Text>
                </View>
              </View>
            </RadioButton.Group>

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignup} >  
              <Text style={styles.login}>Don't have an account? Sign up</Text>
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
    fontSize: 20,
    marginBottom: 30,
  },
  input: {
    alignItems: 'left',
    width: '100%',
    marginBottom: 3,
    padding: 3,
    color: '#777',
    backgroundColor: 'transparent',
    fontSize:  14,
    overflowX: 'scroll'
  },
  button: {
    padding: 15,
    paddingRight: 45,
    paddingLeft: 45,
    borderRadius: 10,
    backgroundColor: '#9579E3',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '500',
    color: '#ffffff',
    fontSize: 14,
  },
  login: {
    color: '#9579E3',
    textDecorationLine: 'underline',
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 20
  }
});


const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
