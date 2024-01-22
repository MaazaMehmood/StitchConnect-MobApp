import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import {Cards} from './Cards';


const HomeCard = ({ navigation, data }) => {

  const recommendedData = [
    {
      id: '1',
      name: 'Tailor 1',
      category: 'Ladies',
      details: 'wedding and festives',
      image: require('../../assets/images/10.jpg'),
    },
    {
      id: '2',
      name: 'Tailor 2',
      category: 'Ladies',
      details: 'Expert in designing dresses and gowns.',
      image: require('../../assets/images/9.jpg'),
    },
    {
      id: '3',
      name: 'Tailor 3',
      category: 'Gents',
      details: 'Specializes in suits and formal wear.',
      image: require('../../assets/images/8.jpg'),
    },
    {
      id: '4',
      name: 'Tailor 4',
      category: 'All',
      details: 'Casual wear',
      image: require('../../assets/images/7.jpg'),
    },
    {
      id: '5',
      name: 'Tailor 5',
      category: 'Gents',
      details: 'Occasions and festives',
      image: require('../../assets/images/6.jpg'),
    },
  ];
  const regularData = [
    {
      id: '1',
      name: 'Tailor 1',
      category: 'Ladies',
      details: 'wedding and festives',
      image: require('../../assets/images/11.jpg'),
    },
    {
      id: '2',
      name: 'Tailor 2',
      category: 'Ladies',
      details: 'Expert in designing dresses and gowns.',
      image: require('../../assets/images/12.jpg'),
    },
    {
      id: '3',
      name: 'Tailor 3',
      category: 'Gents',
      details: 'Specializes in suits and formal wear.',
      image: require('../../assets/images/13.jpg'),
    },
    {
      id: '4',
      name: 'Tailor 4',
      category: 'All',
      details: 'Casual wear',
      image: require('../../assets/images/14.jpg'),
    },
    {
      id: '5',
      name: 'Tailor 5',
      category: 'Gents',
      details: 'Occasions and festives',
      image: require('../../assets/images/15.jpg'),
    },
  ];

  return (
      <View style={styles.container} >

        <ScrollView 
        contentContainerStyle={styles.cardContainer}
        showsVerticalScrollIndicator={false}>

          <View style={styles.card}>
            <Text style={styles.category} >Popular</Text>
            <View style={styles.horizontalScrollContainer}> 
              <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={ ({ item }) => < Cards navigation={navigation} tailor={item} width={250} height={260}/> } 
              />
            </View>
          </View>
          
          <View style={styles.card} >
            <Text style={styles.category} >Recommended</Text>
            <View style={styles.horizontalScrollContainer}> 
              <FlatList
                data={recommendedData}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={ ({ item }) =>  <Cards navigation={navigation} tailor={item} width={250} height={260}/> } 
              />
            </View>
          </View>
          
          <View style={styles.card} >
            <Text style={styles.category} >Regular</Text>
            <View style={styles.horizontalScrollContainer}> 
              <FlatList
                data={regularData}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={ ({ item }) =>  <Cards navigation={navigation} tailor={item} width={250} height={260}/> } 
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
    margin: 3
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
    height: 230,
  }

});

export {HomeCard};