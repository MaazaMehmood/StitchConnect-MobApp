import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';


const UserProfile = ({ route }) => {

  // const [userData, setUserData] = useState(null); // State to store user data

  // fetching user data from an API 
//   useEffect(() => {

//     const fetchUserData = async () => {
//       try {
//         const response = await fetch('');
//         const data = await response.json();
//         setUserData(data);

//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);
  // console.log(route.params);
  // const { accountType } = route.params;

  // const { username, email, password, contact, gender, address, businessDescription, garmentsType, garmentsStyle } = userData;

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Update the userDetails object with edited values
    // setUserData({
    //   ...userData,
    //   username: editedUsername,
    //   email: editedEmail,
    //   password: editedPassword,
    //   contact: editedContact,
    //   gender: editedGender,
    //   address: editedAddress,
    //   desc: editedDescription,
    //   garmentsType: editedGarmentsType,
    //   garmentsStyle: editedGarmentsStyle
    // });
    Alert.alert('Saved',
    'Changes have been saved successfully',);
  };

  // Editable fields
  // const [editedUsername, setEditedUsername] = useState(username); //username, email, pass, add hunge hr field mai ju oper se destructure hurhe hain
  const [editedUsername, setEditedUsername] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedPassword, setEditedPassword] = useState('');
  const [editedContact, setEditedContact] = useState('');
  const [editedGender, setEditedGender] = useState('');
  const [editedAddress, setEditedAddress] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedGarmentsType, setEditedGarmentsType] = useState('');
  const [editedGarmentsStyle, setEditedGarmentsStyle] = useState('');



  return (
    <ScrollView 
      contentContainerStyle={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={require('../assets/images/formaluser.png')} 
        style={styles.profileImage}
      />  
       
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={isEditing ? editedUsername : ''} // '' ki jaga name email .. ki value aegi 
        onChangeText={text => setEditedUsername(text)}
        editable={isEditing}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={isEditing ? editedEmail : ''}
        onChangeText={text => setEditedEmail(text)}
        editable={isEditing}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={isEditing ? editedPassword : ''}
        onChangeText={text => setEditedPassword(text)}
        editable={isEditing}
      />
      <Text style={styles.label}>Contact</Text>
      <TextInput
        style={styles.input}
        value={isEditing ? editedContact : ''}
        onChangeText={text => setEditedContact(text)}
        editable={isEditing}
      />
      <Text style={styles.label}>Gender</Text>
      <TextInput
        style={styles.input}
        value={isEditing ? editedGender : ''}
        onChangeText={text => setEditedGender(text)}
        editable={isEditing}
      />

      {/* {accountType === 'Business Account' && (
        <>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={isEditing ? editedAddress : ''}
            onChangeText={text => setEditedAddress(text)}
            editable={isEditing}
          />
          <Text style={styles.label}>Business Description</Text>
          <TextInput
            style={styles.input}
            value={isEditing ? editedDescription : ''}
            onChangeText={text => setEditedDescription(text)}
            editable={isEditing}
          />
          <Text style={styles.label}>Garments Type</Text>
          <TextInput
            style={styles.input}
            value={isEditing ? editedGarmentsType : ''}
            onChangeText={text => setEditedGarmentsType(text)}
            editable={isEditing}
          />
          <Text style={styles.label}>Garments Style</Text>
          <TextInput
            style={styles.input}
            value={isEditing ? editedGarmentsStyle : ''}
            onChangeText={text => setEditedGarmentsStyle(text)}
            editable={isEditing}
          />
        </>
      )} */}

      {/* buttons */}
      {isEditing ? (
        <TouchableOpacity
          style={styles.button}
          onPress={handleSave}
          >
          <Text style={styles.buttonText}>
            Save 
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={handleEdit}
          >
          <Text style={styles.buttonText}>
            Edit Profile
            <Feather name="edit" size={20} color="#ffff" padding={10} />
          </Text>
        </TouchableOpacity>
      )}
        
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'left',
    justifyContent: 'left',
    padding: 15,
    backgroundColor: '#ffff'
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 75,
    marginBottom: 50,
  },
  label: {
    color: '#424242',
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    color: 'black',
    fontSize: 16,
    letterSpacing: .3,
    borderBottomWidth: 1,
    borderColor: '#F1F0F0',
    borderRadius: 5,
    padding: 5,
    marginBottom: 18,
  },
  button: {
    marginTop: 50,
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

export default UserProfile;
