import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, FlatList, Keyboard, StyleSheet } from 'react-native';
import Cards from './Cards';


const HomeCard = ({ data }) => {

  return (
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
                renderItem={ ({ item }) => < Cards tailor={item} width={250} /> } 
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
                renderItem={ ({ item }) =>  <Cards tailor={item} width={230} /> } 
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
                renderItem={ ({ item }) =>  <Cards tailor={item} width={230}/> } 
              />
            </View>
          </View>

        </ScrollView>
        
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
    position: 'relative',
    flexGrow: 1,
    flexDirection: 'col',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FAF9F9',
  },
  card: {
    margin: 10
  },
  category: {
    color: '#444',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 5,
    marginBottom: 15
  },
  horizontalScrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'scroll', // Enable horizontal scrolling
  }

});

export default HomeCard;