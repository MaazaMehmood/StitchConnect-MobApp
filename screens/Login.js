import React, { useState } from 'react';
import { View, Text, Image,TouchableOpacity, Keyboard,TouchableWithoutFeedback , StyleSheet, Alert } from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import { connect } from 'react-redux';
import { login } from '../store/userActions';
import axios from 'axios';
import { Formik } from 'formik';
import yup  from 'yup';
import validationSchema from '../form schema/schema';


function Login ({ login ,  navigation }) {
  
  const handleSignup = () => {
    navigation.navigate('Account');
  };

  const handleLogin = async (values) => {
    console.log(values); 
    try{

      await axios.
      post('http://ec2-13-53-33-97.eu-north-1.compute.amazonaws.com/api/v1/auth/login', values
      ,{headers: {'content-type': 'application/x-www-form-urlencoded'}})
      .then((res)=>{
      
        if (res.data.message === "Invalid email or password") {
          console.log(res.data);
          Alert.alert('User Not Exist', 'Invalid credentials',);
        } 
        else if (res.data.message === "ok") {
          console.log(res.data);
  
          if (res.data.success) {
            login(values);
            values.role === 'customer' ? 
             navigation.navigate('Home')
              :  navigation.navigate('Dashboard');
          }

          Alert.alert('Login', 'successful',)
          console.log('Login successful');
        }
     });
    } catch (error) {
      console.error('login failed:', error?.message);
    }
  };

  return (
    <>
    <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}>
      <Formik
        initialValues={{ email: '', password: '', role: '' }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.container}>
            <Image
                source={require('../assets/images/SC.png')}
                style={styles.logoImage}
                resizeMode="contain"
            />

            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                label="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email}
                clearTextOnFocus={true}
                underlineColor='#9999'
                activeUnderlineColor='#9579E3'
            />
            <TextInput
                style={styles.input}
                label="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password}
                clearTextOnFocus={true}
                underlineColor='#9999'
                activeUnderlineColor='#9579E3'
                secureTextEntry
            />
            <RadioButton.Group
              onValueChange={(newValue) => handleChange('role')(newValue)}
              value={values.role}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginRight: 150 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'start', alignItems: 'center' }} >
                  <RadioButton value="tailor" />
                  <Text style={{ color: '#444' }}>Business</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'start', alignItems: 'center' }} >
                  <RadioButton value="customer" />
                  <Text style={{ color: '#444' }}>Customer</Text>
                </View>
              </View>
            </RadioButton.Group>

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
              <Text style={styles.signup}>Don't have an account?</Text>
              <TouchableOpacity onPress={(handleSignup)}  >  
                  <Text style={[styles.signup, { textDecorationLine: 'underline'}]}> Sign up</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        )}
      </Formik>
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
  signup: {
    color: '#9579E3',
    fontSize: 14,
    fontStyle: 'italic',
  }
});


const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
