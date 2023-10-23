import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import {SearchBar} from '../components/SearchBar';
import {HomeCard} from '../components/Cards/HomeCard';


function Home ({ navigation }) {

  // sample data
  const tailorData = [
    {
      id: '1',
      name: 'Tailor 1',
      category: 'Ladies',
      details: 'wedding and festives',
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
      category: 'Gents',
      details: 'Specializes in suits and formal wear.',
      image: '',
    },
    {
      id: '4',
      name: 'Tailor 4',
      category: 'All',
      details: 'Casual wear',
      image: '',
    },
    {
      id: '5',
      name: 'Tailor 5',
      category: 'Gents',
      details: 'Occassions and festives',
      image: '',
    },
  ];

  const handleSearch = () => {
    navigation.navigate('Search');
  }

 

  return (
    <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}>
      <>
        <SearchBar navigation={navigation} onSearch={handleSearch} />
        <HomeCard navigation={navigation} data={tailorData} />   
      </>
    </TouchableWithoutFeedback>
    
  );
};


export {Home};