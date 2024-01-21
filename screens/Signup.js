import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity,TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, Dimensions, Alert } from 'react-native';
import { TextInput, RadioButton, Checkbox } from 'react-native-paper';
import axios from 'axios';


const signupEndpoint = 'http://ec2-13-53-33-97.eu-north-1.compute.amazonaws.com/api/v1/auth/signUp';

function Signup ({ navigation, route }) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');

  const { role } = route.params;
  
  const [address, setAddress] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [type, setType] = useState('');
  const [style, setStyle] = useState('');

  const [isChecked, setIsChecked] = useState(false);

  const handleSignup = async() => {
    const bodyData = {
      firstname: firstName,
      email,
      password,
      role,
      lastname: lastName,
      contactno: contact,
      gender,
    }
    console.log('Sending signup request with data:', bodyData);
    // send the data to server for registration

    try{
      await axios.post(signupEndpoint, { 
        firstname: firstName,
        email,
        password,
        role,
        lastname: lastName,
        contactno: contact,
        gender,        
      })
      .then((res)=>{
        if (res.data.message === "already exist") {
          alert("User Already Exist");
        } 
        else if (res.data.message === "ok") {
          Alert.alert('', 'Signup successful',);
          console.log('Signup successful');
          console.log(res.data);
          navigation.navigate('Login');
        }
      });
    } catch (error) {
      console.error('Signup failed:', error?.message);
    }
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleAgreement = () => {
    navigation.navigate('Agreement')
  }
  return (
       
    <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}>
    <ImageBackground
        source={require('../assets/images/bg(4).png')}
        style={styles.ImageBackground}
    >
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={styles.Container}>
          <Text style={styles.title}>Sign Up</Text>
          
          <View style={styles.view} >
            <TextInput
                style={styles.input}
                label="First Name*"
                onChangeText={(text) => setFirstName(text)}
                value={firstName}
                underlineColor='#9999'
                activeUnderlineColor='#9579E3'
            />
            <TextInput
                style={styles.input}
                label="Last Name"
                onChangeText={(text) => setLastName(text)}
                value={lastName}
                underlineColor='#9999'
                activeUnderlineColor='#9579E3'
            />
            <TextInput
                style={styles.input}
                label="Email*"
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
                label="Contact"
                onChangeText={(text) => setContact(text)}
                value={contact}
                keyboardType='numeric'
                underlineColor='#9999'
                activeUnderlineColor='#9579E3'
            />
            
            <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}  >
              <Text style={{ margin: 3}} ></Text>
              <View style={{ flexDirection: 'row', justifyContent: 'start', alignItems: 'center'}} >
                <RadioButton value="male" />
                <Text style={{color: '#444'}}>Male</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'start', alignItems: 'center', marginBottom: 8}} >
                <RadioButton value="female" />
                <Text style={{color: '#444'}}>Female</Text>
              </View>
            </RadioButton.Group>



            {role === 'tailor' && (
              <View>

                <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 30 }}> Business Details</Text>
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

          <View style={{ flexDirection: 'row', justifyContent: 'left', alignItems: 'center'}}>
            <Checkbox.Item
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={handleCheck}
            />
            <View>
              <Text >I have read and agree to the</Text>
              <TouchableOpacity onPress={handleAgreement}><Text style={{ color: '#4F88D8'}}>terms of service</Text></TouchableOpacity>
            </View>
          </View>
          

          <TouchableOpacity
            style={[styles.button,  { backgroundColor: isChecked  ? '#9579E3' : '#DED7EA' } ]}
            onPress={handleSignup}
            disabled={!isChecked}
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
    marginVertical: 20,
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
    fontSize: 20,
    marginVertical: 30,
    textAlign: 'center'
  },
  view: {
    marginBottom: 30,
  },
  input: {
    alignItems: 'left',
    width: '100%',
    marginBottom: 5,
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
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '500',
    color: '#ffffff',
    fontSize: 14,
  }
});


export {Signup};
