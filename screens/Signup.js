import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet } from 'react-native';
import Seperator from '../components/Seperator';


const Signup = ({ route }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');

  const { accountType } = route.params;
  
  const [address, setAddress] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [category, setCategory] = useState('');


  const handleSignup = () => {
    
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Account Type:', accountType);
    // send the data to server for registration 
    
  };

  return (
       
    <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}>
    <ScrollView 
      contentContainerStyle={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Sign Up</Text>
      
      <View style={styles.view} >
        <View >
          <Text style={styles.account}>Personal</Text>
          <Seperator/>
        </View>

        <TextInput
            style={styles.input}
            placeholder="First Name*"
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
        />
        <TextInput
            style={styles.input}
            placeholder="Last Name*"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
        />
        <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
        />
        <TextInput
            style={styles.input}
            placeholder="Password*"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
        />
        <TextInput
            style={styles.input}
            placeholder="Contact*"
            onChangeText={(text) => setContact(text)}
            value={contact}
            keyboardType='numeric'
        />
        <TextInput
            style={styles.input}
            placeholder="Gender"
            onChangeText={(text) => setGender(text)}
            value={gender}
        />

        {accountType === 'Business Account' && (
          <View>
              <View >
                <Text style={styles.account}>Business Description</Text>
                <Seperator/>
              </View>
              
              <TextInput
                  multiline
                  style={styles.input}
                  placeholder="Address / Location*"
                  onChangeText={(text) => setAddress(text)}
                  value={address}
              />
              <TextInput
                  multiline
                  style={styles.input}
                  placeholder="Business Description*"
                  onChangeText={(text) => setBusinessDescription(text)}
                  value={businessDescription}
                  maxLength={100}
              />
              <TextInput
                  style={styles.input}
                  placeholder="Garment type*"
                  onChangeText={(text) => setCategory(text)}
                  value={category}
              />
              <TextInput
                  style={styles.input}
                  placeholder="Garment style*"
                  onChangeText={(text) => setCategory(text)}
                  value={category}
              />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignup}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </ScrollView>  
    </TouchableWithoutFeedback>    
    
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'left',
    padding: 15,
    backgroundColor: '#ffff'
  },  
  title: {
    position: 'relative',
    fontWeight: 'bold',
    letterSpacing: .5,
    fontSize: 25,
    margin: 10,
  },
  account: {
    letterSpacing: .5,
    fontSize: 16,
    margin: 10,
    color: '#424242',
    padding: 5,
  },
  view: {
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
    backgroundColor: '#755ED1',
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 16,
  }
});

export default Signup;
