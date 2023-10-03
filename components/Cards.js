import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Cards = ({ tailor }) => {
  return (
    <View style={styles.card}>
      <Image source={require('../assets/images/image.jpg')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{tailor.name}</Text>
        <Text style={styles.category}>{tailor.category}</Text>
        <Text style={styles.details}>{tailor.details}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'col',
    // backgroundColor: '#fff',
    // borderRadius: 8,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 3,
    margin: 5,
    padding: 5,
    width: 230,
    height: 230
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 5,
  },
  textContainer: {
    flexDirection: 'col',
    justifyContent: 'left',
    alignItems: 'left',
    flexWrap: 'wrap',
    padding: 3,
    marginBottom:2
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 1,
    color: '#444',
  },
  category: {
    fontSize: 15,
    color: '#777',
    marginBottom: 1,
  },
  details: {
    flexWrap: 'wrap',
    marginVertical: 1,
    fontSize: 13,
    color: '#444',
  },
});

export default Cards;

