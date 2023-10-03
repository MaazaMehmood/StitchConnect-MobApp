import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, FlatList, Keyboard, StyleSheet } from 'react-native';
import Cards from './Cards';


const HomeCard = ({ data }) => {

  return (
    <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}>
      <View style={styles.container} >

        <ScrollView 
        contentContainerStyle={styles.cardContainer}
        showsVerticalScrollIndicator={false}>

          <View style={styles.card} >
            <Text style={styles.category} >Popular</Text>
            <View style={styles.horizontalScrollContainer}> 
              <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={ ({ item }) => < Cards tailor={item} /> } 
              />
            </View>
          </View>
          
          <View style={styles.card} >
            <Text style={styles.category} >Recommended</Text>
            <View style={styles.horizontalScrollContainer}> 
              <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={ ({ item }) =>  <Cards tailor={item} /> } 
              />
            </View>
          </View>
          
          <View style={styles.card} >
            <Text style={styles.category} >Regular</Text>
            <View style={styles.horizontalScrollContainer}> 
              <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={ ({ item }) =>  <Cards tailor={item} /> } 
              />
            </View>
          </View>

        </ScrollView>
        
      </View>
    </TouchableWithoutFeedback>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    position: 'relative',
    flexGrow: 1,
    flexDirection: 'col',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAF9F9',
  },
  card: {
    // position: 'relative',
    // backgroundColor: '#FAF9F9',
    margin: 5,
    padding: 8,
  },
  category: {
    color: '#444',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 5,
  },
  horizontalScrollContainer: {
    flexDirection: 'row',
    overflow: 'scroll', // Enable horizontal scrolling
  }

});

export default HomeCard;