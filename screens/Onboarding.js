import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const Onboarding = ({ navigation }) => {

    const handleLogin = () => {
        navigation.navigate('Login');
    };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/bg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      <Text style={styles.titletext}>Lets Get Started</Text>
      
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
  titletext: {
    textAlign: 'left',
    fontSize: 50,
    fontWeight: 'medium',
    letterSpacing: 3,
    color: 'white',
    margin: 10,
    paddingRight:100
  },
  text: {
    fontSize: 20,
    fontWeight: 'light',
    fontStyle: 'italic',
    color: 'white',
    opacity: .6,
    marginBottom: 80,
  },
  button: {
    position: 'relative',
    marginBottom: '-85%',
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
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Onboarding;
