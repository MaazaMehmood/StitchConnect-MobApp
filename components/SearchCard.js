import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback, FlatList, Keyboard, StyleSheet } from 'react-native';
import Cards from './Cards';



const SearchCard = ({ searchData }) => {
  
  return (
    <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}>
      <View style={styles.container} >

        <View style={styles.cardContainer}>  
          <FlatList
            data={searchData}
            keyExtractor={(item) => item.id}
            renderItem={ ({ item }) =>  <Cards tailor={item} /> } 
            showsVerticalScrollIndicator={false}
          />
        </View>

      </View>
    </TouchableWithoutFeedback>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF9F9'
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'col',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default SearchCard;