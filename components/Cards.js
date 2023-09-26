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
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    margin: 5,
    padding: 5,
    width: 300,
    height: 140
  },
  image: {
    width: '50%',
    height: '100%',
    borderRadius: 10,
  },
  textContainer: {
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
    padding: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  category: {
    fontSize: 16,
    color: '#777',
    marginBottom: 2,
  },
  details: {
    fontSize: 13,
    color: '#444',
  },
});

export default Cards;

