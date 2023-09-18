import React, { useState } from 'react';
import { View, Text, Image,TouchableOpacity, TextInput, StyleSheet } from 'react-native';



const Home = () => {

  return (
    <View style={styles.container}>
        <Text>Home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffff'
  }
});

export default Home;