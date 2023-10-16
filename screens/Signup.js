import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity,TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { TextInput, RadioButton, Checkbox } from 'react-native-paper';


function Signup ({ route }) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');

  const { accountType } = route.params;
  
  const [address, setAddress] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [type, setType] = useState('');
  const [style, setStyle] = useState('');


  const handleSignup = () => {
    
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Account Type:', accountType);
    // send the data to server for registration 
    
  };

  return (
       
    <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}>
    <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.ImageBackground}
      >
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={styles.Container}>
          <Text style={styles.title}>Sign Up</Text>
          
          <View style={styles.view} >
            <TextInput
                style={styles.input}
                label="First Name"
                onChangeText={(text) => setFirstName(text)}
                value={firstName}
                underlineColor='#9999'
                activeUnderlineColor='#9579E3'
            />
            <TextInput
                style={styles.input}
                label="Last Name*"
                onChangeText={(text) => setLastName(text)}
                value={lastName}
                underlineColor='#9999'
                activeUnderlineColor='#9579E3'
            />
            <TextInput
                style={styles.input}
                label="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColor='#9999'
                activeUnderlineColor='#9579E3'
            />
            <TextInput
                style={styles.input}
                label="Password*"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
                underlineColor='#9999'
                activeUnderlineColor='#9579E3'
            />
            <TextInput
                style={styles.input}
                label="Contact*"
                onChangeText={(text) => setContact(text)}
                value={contact}
                keyboardType='numeric'
                underlineColor='#9999'
                activeUnderlineColor='#9579E3'
            />
            <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}  >
              <Text style={{ margin: 3}} ></Text>
              <View style={{ flexDirection: 'row', justifyContent: 'start', alignItems: 'center'}} >
                <RadioButton value="Male" />
                <Text style={{color: '#444'}}>Male</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'start', alignItems: 'center', marginBottom: 8}} >
                <RadioButton value="Female" />
                <Text style={{color: '#444'}}>Female</Text>
              </View>
            </RadioButton.Group>

            {accountType === 'Business Account' && (
              <View>

                  <Text style={{ fontSize: 16, fontWeight: 500, marginVertical: 30 }}> Business Details</Text>
                  <TextInput
                      style={styles.input}
                      label="Address / Location*"
                      onChangeText={(text) => setAddress(text)}
                      value={address}
                      underlineColor='#9999'
                      activeUnderlineColor='#9579E3'
                  />
                  <TextInput
                      multiline={true}
                      numberOfLines={6}
                      maxLength={300}
                      textAlignVertical="top" 
                      textAlign="left"
                      style={styles.input}
                      label="Business Description*"
                      onChangeText={(text) => setBusinessDescription(text)}
                      value={businessDescription}
                      underlineColor='#9999'
                      activeUnderlineColor='#9579E3'
                  />
                  <TextInput
                      style={styles.input}
                      label="Garment Type*"
                      onChangeText={(text) => setType(text)}
                      value={type}
                      underlineColor='#9999'
                      activeUnderlineColor='#9579E3'
                  />
                  <TextInput
                      style={styles.input}
                      label="Garment Style*"
                      onChangeText={(text) => setStyle(text)}
                      value={style}
                      underlineColor='#9999'
                      activeUnderlineColor='#9579E3'
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
        </View>
      </ScrollView> 
    </ImageBackground> 
    </TouchableWithoutFeedback>    
    
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1
  },
  Container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'left',
    position: "relative",
    padding: 8,
    marginHorizontal: 8,
    marginVertical: 15,
    borderRadius: 10,
    backgroundColor: "#ffff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },  
  title: {
    position: 'relative',
    fontWeight: '500',
    letterSpacing: .5,
    fontSize: 24,
    margin: 10,
    marginBottom: 50
  },
  view: {
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
    paddingRight: 55,
    paddingLeft: 55,
    borderRadius: 50,
    backgroundColor: '#9579E3',
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '500',
    color: '#ffffff',
    fontSize: 18,
  }
});

export default Signup;
