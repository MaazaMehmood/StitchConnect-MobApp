import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import HorizontalLine from '../components/HorizontalLine';


const Profiles = ({ navigation }) => {
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

  const handleContinue = () => {
    navigation.navigate('Home')
  }

  return (
    <View  style={styles.container}>
      <Image
        source={require('../assets/images/formaluser.png')} 
        style={styles.profileImage}
      />

      {/* {userData ? (
        <View>
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.name}>{userData.email}</Text>
          <Text style={styles.name}>{userData.bio}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )} */}
       
       <ScrollView>
          <Text style={styles.name}>Maaza Mehmood</Text>
          <HorizontalLine/>
          <Text style={styles.name}>maaza24@gmail.com</Text>
          <HorizontalLine/>
          <Text style={styles.name}>12345900</Text>
          <HorizontalLine/>
          <Text style={styles.name}>Female</Text>
          <HorizontalLine/>
          <Text style={styles.name}>Maaza Mehmood</Text>
          <HorizontalLine/>
          <Text style={styles.name}>maaza24@gmail.com</Text>
          <HorizontalLine/>
          <Text style={styles.name}>12345900</Text>
          <HorizontalLine/>
          <Text style={styles.name}>Female</Text>
          <HorizontalLine/>
          <Text style={styles.name}>Maaza Mehmood</Text>
          <HorizontalLine/>
          <Text style={styles.name}>maaza24@gmail.com</Text>
          <HorizontalLine/>
          <Text style={styles.name}>12345900</Text>
          <HorizontalLine/>
          <Text style={styles.name}>Female</Text>
          <HorizontalLine/>
        </ScrollView>

        <TouchableOpacity
        style={styles.button}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>Save and Continue</Text>
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  name: {
    fontSize: 16,
    color: '#454444',
    marginBottom: 5,
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

export default Profiles;
