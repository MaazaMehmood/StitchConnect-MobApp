import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';


function UserProfile ({ user }) {

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
       
      <TextInput
        style={styles.input}
        label='username'
        value={isEditing ? editedUsername : ''} // '' ki jaga name email .. ki value aegi 
        onChangeText={text => setEditedUsername(text)}
        editable={isEditing}
        underlineColor='#9999'
        activeUnderlineColor='#9579E3'
      />

      <TextInput
        style={styles.input}
        label='Email'
        value={isEditing ? editedEmail : ''}
        onChangeText={text => setEditedEmail(text)}
        editable={isEditing}
        underlineColor='#9999'
        activeUnderlineColor='#9579E3'
      />
    
      <TextInput
        style={styles.input}
        label='Password'
        value={isEditing ? editedPassword : ''}
        onChangeText={text => setEditedPassword(text)}
        editable={isEditing}
        underlineColor='#9999'
        activeUnderlineColor='#9579E3'
      />
      
      <TextInput
        style={styles.input}
        label='Contact'
        value={isEditing ? editedContact : ''}
        onChangeText={text => setEditedContact(text)}
        editable={isEditing}
        underlineColor='#9999'
        activeUnderlineColor='#9579E3'
      />

      <TextInput
            style={styles.input}
            label='Address'
            value={isEditing ? editedAddress : ''}
            onChangeText={text => setEditedAddress(text)}
            editable={isEditing}
            underlineColor='#9999'
            activeUnderlineColor='#9579E3'
      />
      
      <TextInput
        style={styles.input}
        label='Gender'
        value={isEditing ? editedGender : ''}
        onChangeText={text => setEditedGender(text)}
        editable={isEditing}
        underlineColor='#9999'
        activeUnderlineColor='#9579E3'
      />

      { user.userType === "business" && (
        <>
          
          <TextInput
            style={styles.input}
            label='Business Description'
            value={isEditing ? editedDescription : ''}
            onChangeText={text => setEditedDescription(text)}
            editable={isEditing}
            underlineColor='#9999'
            activeUnderlineColor='#9579E3'
          />
        
          <TextInput
            style={styles.input}
            label='Garment Type'
            value={isEditing ? editedGarmentsType : ''}
            onChangeText={text => setEditedGarmentsType(text)}
            editable={isEditing}
            underlineColor='#9999'
            activeUnderlineColor='#9579E3'
          />
          
          <TextInput
            style={styles.input}
            label='Garment Style'
            value={isEditing ? editedGarmentsStyle : ''}
            onChangeText={text => setEditedGarmentsStyle(text)}
            editable={isEditing}
            underlineColor='#9999'
            activeUnderlineColor='#9579E3'
          />
        </>
      )}

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
    alignItems: 'center',
    justifyContent: 'left',
    padding: 8,
    backgroundColor: '#ffff'
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 75,
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
    overflowX: 'scroll',
    letterSpacing: .3
  },
  button: {
    marginTop: 50,
    padding: 15,
    paddingRight: 45,
    paddingLeft: 45,
    borderRadius: 10,
    backgroundColor: '#9579E3',
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '500',
    color: '#ffffff',
    fontSize: 14,
  }
});

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(UserProfile);
