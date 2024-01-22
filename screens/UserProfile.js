import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';


function UserProfile ({ user }) {

  const [pickedDocumentUri, setPickedDocumentUri] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [editedUsername, setEditedUsername] = useState(`${user.firstname} ${user.lastname}`);
  const [editedEmail, setEditedEmail] = useState(user.email);
  const [editedContact, setEditedContact] = useState(user.contactno);
  const [editedGender, setEditedGender] = useState(user.gender);
  const [editedRole, setEditedRole] = useState(user.role);
  const [editedDescription, setEditedDescription] = useState(user.businessdescription);
  const [editedGarmentsType, setEditedGarmentsType] = useState(user.garmenttype);
  const [editedGarmentsStyle, setEditedGarmentsStyle] = useState(user.garmentstyle);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
    const editedData = {
      firstname : editedName,
      email: editedEmail,
      contactno: editedContact,
      businessdescription: editedDescription,
      garmenttype: editedGarmentsType,
      garmentstyle: editedGarmentsStyle,
    };
    try{

      await axios.
      put('http://ec2-13-53-33-97.eu-north-1.compute.amazonaws.com/api/v1/customer/editCustomer/659c3baf6a1bbb863b22104c', editedData
      ,{headers: {'content-type': 'application/x-www-form-urlencoded'}})
      .then((res)=>{
          Alert.alert('Saved', 'Changes saved successfully',);
      });
    } catch (error) {
      console.error('something went wrong', error?.message);
      Alert.alert('something went wrong', error?.message,);
    }
  };


  const handleImagePicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (result.type === 'success' && result.uri) {
        console.log('Document picked successfully:', result.uri);
        setPickedDocumentUri(result.uri);
      } else {
        console.log('Document picking cancelled');
      }
    } catch (err) {
      console.log('Document picking failed', err);
    }
  }

  return (
    <ScrollView 
      contentContainerStyle={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ position: 'relative'}}>
        <Image
          source={pickedDocumentUri ? { uri: pickedDocumentUri } : require('../assets/images/formaluser.png')} 
          style={styles.profileImage}
        />
        {isEditing? (
        <TouchableOpacity onPress={handleImagePicker}>
          <Feather name="edit" size={21} color="#000000" style={styles.editIcon}  />
        </TouchableOpacity>) : ''
        }  
        
      </View>
       
      <TextInput
        style={styles.input}
        label='Username'
        value={editedUsername} 
        onChangeText={text => setEditedUsername(text)}
        editable={isEditing}
        underlineColor='#9999'
        activeUnderlineColor='#9579E3'
      />

      <TextInput
        style={styles.input}
        label='Email'
        value={editedEmail}
        onChangeText={text => setEditedEmail(text)}
        editable={isEditing}
        underlineColor='#9999'
        activeUnderlineColor='#9579E3'
      />
      
      <TextInput
        style={styles.input}
        label='Contact'
        value={editedContact}
        onChangeText={text => setEditedContact(text)}
        editable={isEditing}
        underlineColor='#9999'
        activeUnderlineColor='#9579E3'
      />

      <TextInput
            style={styles.input}
            label='Account'
            value={editedRole}
            onChangeText={text => setEditedRole(text)}
            underlineColor='#9999'
            activeUnderlineColor='#9579E3'
      />
      
      <TextInput
        style={styles.input}
        label='Gender'
        value={editedGender}
        onChangeText={text => setEditedGender(text)}
        underlineColor='#9999'
        activeUnderlineColor='#9579E3'
      />

      { user.role === "tailor" && (
        <>
          
          <TextInput
            style={styles.input}
            label='Business Description'
            value={editedDescription}
            onChangeText={text => setEditedDescription(text)}
            editable={isEditing}
            underlineColor='#9999'
            activeUnderlineColor='#9579E3'
          />
        
          <TextInput
            style={styles.input}
            label='Garment Type'
            value={editedGarmentsType}
            onChangeText={text => setEditedGarmentsType(text)}
            editable={isEditing}
            underlineColor='#9999'
            activeUnderlineColor='#9579E3'
          />
          
          <TextInput
            style={styles.input}
            label='Garment Style'
            value={ editedGarmentsStyle}
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
  editIcon: {
    position: 'absolute',
    bottom: 30,
    right: -2,
    backgroundColor: 'white', 
    padding: 5,
    borderRadius: 10,
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
