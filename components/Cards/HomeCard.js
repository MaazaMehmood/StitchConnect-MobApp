import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import {Cards} from './Cards';


const HomeCard = ({ navigation, data }) => {

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
                renderItem={ ({ item }) => < Cards navigation={navigation} tailor={item} width={250}/> } 
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
                renderItem={ ({ item }) =>  <Cards navigation={navigation} tailor={item} width={250} /> } 
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
                renderItem={ ({ item }) =>  <Cards navigation={navigation} tailor={item} width={250}/> } 
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
    backgroundColor: '#FCFAFA',
  },
  cardContainer: {
    position: 'relative',
    flexGrow: 1,
    flexDirection: 'col',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    margin: 10
  },
  category: {
    color: '#444',
    fontWeight: '500',
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

export {HomeCard};