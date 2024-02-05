import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {FavouriteCards} from '../components/Cards/FavouriteCards';


function Favorites() {

  const [favorites, setFavorites] = useState([
    {
      id: '1',
      name: 'Tailor 1',
      category: 'Ladies',
      details: 'wedding and festives',
      image: require('../assets/images/1.jpg'),
    },
    {
      id: '2',
      name: 'Tailor 2',
      category: 'Ladies',
      details: 'Expert in designing dresses and gowns.',
      image: require('../assets/images/2.jpg'),
    },
    {
      id: '3',
      name: 'Tailor 3',
      category: 'Gents',
      details: 'Specializes in suits and formal wear.',
      image: require('../assets/images/3.jpg'),
    },
    {
      id: '4',
      name: 'Tailor 4',
      category: 'All',
      details: 'Casual wear',
      image: require('../assets/images/4.jpg'),
    },
    {
      id: '5',
      name: 'Tailor 5',
      category: 'Gents',
      details: 'Occasions and festives',
      image: require('../assets/images/6.jpg'),
    },
 
  ]);

  const removeFavorite = (itemId) => {
    // Find the index of the item to remove
    const indexToRemove = favorites.findIndex((item) => item.id === itemId);

    if (indexToRemove !== -1) {

      // const updatedFavorites = [...favorites];

      // updatedFavorites.splice(indexToRemove, 1);
      // setFavorites(updatedFavorites);

    }
  };

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <FavouriteCards tailor={item} id={item.id} removeFavorites={removeFavorite} />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.noFavoritesText}>No favorite tailors.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#FCFAFA',
  },
  cardContainer: {
    alignItems: 'center',
  },
  noFavoritesText: {
    fontSize: 16,
    color: '#777',
  },
});


export {Favorites};
