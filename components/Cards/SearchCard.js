import React, { useEffect, useState } from 'react';
import { View, Text, TouchableWithoutFeedback, FlatList, Keyboard, StyleSheet } from 'react-native';
import Cards from './Cards';



const SearchCard = ({ navigation, searchData }) => {
  
  return (
    <View style={styles.container} >

      <View style={styles.cardContainer}>  
        <FlatList
          data={searchData}
          keyExtractor={(item) => item.id}
          renderItem={ ({ item }) =>  <Cards navigation={navigation} tailor={item} width={330} /> } 
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    marginVertical: 10
  },

});

export default SearchCard;