import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



const Splash = () => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('../assets/images/bg(1).jpg')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      {/* Logo */}
      <Image
        source={require('../assets/images/SC.png')} 
        style={styles.logo}
      />
      
      {/* Optional Text */}
      <Text style={styles.text}>Welcome to Stitch Connect</Text>
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
  logo: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
});

export default Splash;
