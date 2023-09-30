import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity,TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet } from 'react-native';
import Seperator from '../components/Seperator';
// import SelectInput from '../components/SelectInput';


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
                      numberOfLines={3}
                      style={styles.input}
                      placeholder="Address / Location*"
                      onChangeText={(text) => setAddress(text)}
                      value={address}
                  />
                  <TextInput
                      multiline
                      numberOfLines={5}
                      style={styles.input}
                      placeholder="Business Description*"
                      onChangeText={(text) => setBusinessDescription(text)}
                      value={businessDescription}
                      maxLength={100}
                  />
                  {/* <SelectInput label='Select Garment Type' options={options} /> */}
                  <Text style={styles.account}>Garment Type</Text>
                  <TextInput
                      style={styles.input}
                      placeholder="ladies/gents/kids/all*"
                      onChangeText={(text) => setType(text)}
                      value={type}
                  />
                  <Text style={styles.account}>Garment Style</Text>
                  <TextInput
                      style={styles.input}
                      placeholder="festive,wedding,casual,suits"
                      onChangeText={(text) => setStyle(text)}
                      value={style}
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
    width: '100%',
    height: '100%',
    zIndex: 1
  },
  Container: {
    flexGrow: 1,

    justifyContent: 'center',
    alignItems: 'left',
    position: "relative",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: "#ffff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },  
  title: {
    position: 'relative',
    fontWeight: 'bold',
    letterSpacing: .5,
    fontSize: 25,
    margin: 15,
    marginBottom: 30
  },
  account: {
    letterSpacing: .5,
    fontSize: 16,
    margin: 8,
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
    backgroundColor: '#9579E3',
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
