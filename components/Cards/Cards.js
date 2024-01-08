import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const Cards = ({ navigation, tailor, width }) => {

  const handlePortfolio = () => {
    navigation.navigate('Portfolio');
  }

  return (
    <TouchableOpacity onPress={handlePortfolio}>
    <View style={[styles.card, {width: width}]}>
      <Image source={require('../../assets/images/image.jpg')} style={styles.image} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5}} >
        <View style={styles.textContainer}>
          <Text style={styles.name}>{tailor.name}</Text>
          <Text style={styles.category}>{tailor.category}</Text>
          <Text style={styles.details}>{tailor.details}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'col',
    justifyContent: 'left',
    alignItems: 'center',
    // backgroundColor: '#fff',
    // borderRadius: 8,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 3,
    margin: 5,
    padding: 3,
  
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    borderRadius: 5,
  },
  textContainer: {
    flexDirection: 'col',
    justifyContent: 'center',
    alignItems: 'left',
    padding: 3,
    marginTop: '55%',
    width: '100%',
    overflow: 'hidden'
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 1,
    color: '#444',
  },
  category: {
    fontSize: 14,
    color: '#777',
    marginBottom: 1,
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 1,
    fontSize: 13,
    fontWeight: '500',
    color: '#444',
  },
});

export {Cards};

