import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import HorizontalLine from '../components/HorizontalLine';


const Signup = ({ navigation, route }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [photo, setPhoto] = useState('');

  const { accountType } = route.params;
  
  const [address, setAddress] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [category, setCategory] = useState('');


  const handleSignup = () => {
    
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Account Type:', accountType);
    // send the data to server for registration 
    
    navigation.navigate('Profile');
  };

  return (
       
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
   
      <Text style={styles.title}>Sign Up</Text>
      
      <View>
        <View >
          <Text style={styles.account}>Personal</Text>
          <HorizontalLine/>
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
        <TextInput
                  style={styles.input}
                  placeholder="profile photo (optional)"
                  onChangeText={(text) => setPhoto(text)}
                  value={photo}
              />

        {accountType === 'Business Account' && (
          <View>
              
              <View >
                <Text style={styles.account}>Business Description</Text>
                <HorizontalLine/>
              </View>
              
              <TextInput
                  style={styles.input}
                  placeholder="Address / Location*"
                  multiline={true}
                  numberOfLines={3}
                  onChangeText={(text) => setAddress(text)}
                  value={address}
              />
              <TextInput
                  style={styles.input}
                  placeholder="Business Description*"
                  multiline={true}
                  numberOfLines={6}
                  onChangeText={(text) => setBusinessDescription(text)}
                  value={businessDescription}
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
  }
});

export default Signup;
