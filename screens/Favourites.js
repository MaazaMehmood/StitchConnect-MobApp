import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FavouriteCards from '../components/Cards/FavouriteCards';


function Favourites() {

  const [favorites, setFavorites] = useState([
    {
      id: '1',
      name: 'Tailor 1',
      category: 'Ladies',
      details: 'Wedding and festives',
      image: '',
    },
    {
      id: '2',
      name: 'Tailor 2',
      category: 'Ladies',
      details: 'Expert in designing dresses and gowns.',
      image: '',
    },
    {
      id: '3',
      name: 'Tailor 3',
      category: 'Ladies',
      details: 'Expert in designing dresses and gowns.',
      image: '',
    },
    {
      id: '4',
      name: 'Tailor 4',
      category: 'Ladies',
      details: 'Expert in designing dresses and gowns.',
      image: '',
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

export default Favourites;
