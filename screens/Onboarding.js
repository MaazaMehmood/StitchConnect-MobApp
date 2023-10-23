import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';


function Onboarding ({ navigation }) {

  const handleLogin = () => {
      navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      <Text style={styles.titleText}>Lets Get Started</Text>
      
      <Text style={styles.text}>Stitching Stories Of Style And Grace</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>  Login </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'medium',
    letterSpacing: 2,
    color: '#ffff',
    margin: 10,
    paddingHorizontal: 10
  },
  text: {
    fontSize: 18,
    fontWeight: 'light',
    fontStyle: 'italic',
    color: 'white',
    opacity: .6,
    paddingBottom: 50
  },
  button: {
    position: 'relative',
    marginBottom: '-115%',
    padding: 15,
    paddingRight: 55,
    paddingLeft: 55,
    shadowRadius: 0,
    shadowOpacity: 0,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ffff',
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export {Onboarding};
