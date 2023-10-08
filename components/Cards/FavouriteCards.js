import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CustomIcon from '../CustomIcon';



const FavouriteCards = ({ tailor,  id, removeFavorites }) => {

  const[iconName, setIconName]= useState('heart');

  const handleRemoveFavorites= () => {
    setIconName(iconName === 'heart'? 'heart-outline' : 'heart');
    removeFavorites(id);
  }

  return (
    <View style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'start', alignItems: 'center'}} >
            <Image source={require('../../assets/images/image.jpg')} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{tailor.name}</Text>
                <Text style={styles.category}>{tailor.category}</Text>
                <Text style={styles.details}>{tailor.details}</Text>
            </View>
        </View>
        <TouchableOpacity onPress={handleRemoveFavorites}>
          <CustomIcon iconName={iconName} color='#9579E3'  />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'right',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    margin: 5,
    padding: 5,
    width: 340,
    height: 100
  },
  image: {
    width: '30%',
    height: '98%',
    borderRadius: 5,
  },
  textContainer: {
    flexDirection: 'col',
    justifyContent: 'center',
    alignItems: 'left',
    paddingLeft: 10,
    width: '63%',
    height: '100%',
    overflow: 'hidden',
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

export default FavouriteCards;

