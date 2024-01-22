import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import {SearchBar} from '../components/SearchBar';
import {SearchCard} from '../components/Cards/SearchCard';


function Search ({ navigation }) {
  // sample data

  const tailorData = [
    {
      id: '1',
      name: 'Tailor 1',
      category: 'Ladies',
      details: 'wedding and festives',
      image: require('../assets/images/16.jpg'),
    },
    {
      id: '2',
      name: 'Tailor 2',
      category: 'Ladies',
      details: 'Expert in designing dresses and gowns.',
      image: require('../assets/images/12.jpg'),
    },
    {
      id: '3',
      name: 'Tailor 3',
      category: 'Gents',
      details: 'Specializes in suits and formal wear.',
      image: require('../assets/images/14.jpg'),
    },
    {
      id: '4',
      name: 'Tailor 4',
      category: 'All',
      details: 'Casual wear',
      image: require('../assets/images/13.jpg'),
    },
    {
      id: '5',
      name: 'Tailor 5',
      category: 'Gents',
      details: 'Occassions and festives',
      image: require('../assets/images/15.jpg'),
    },
    {
      id: '6',
      name: 'Tailor 6',
      category: 'Ladies',
      details: 'wedding and festives',
      image: require('../assets/images/11.jpg'),
    },
    {
      id: '7',
      name: 'Tailor 7',
      category: 'Ladies',
      details: 'Expert in designing dresses and gowns.',
      image: require('../assets/images/10.jpg'),
    },
    {
      id: '8',
      name: 'Tailor 8',
      category: 'Gents',
      details: 'Specializes in suits and formal wear.',
      image: require('../assets/images/9.jpg'),
    },
    {
      id: '9',
      name: 'Tailor 9',
      category: 'All',
      details: 'Casual wear',
      image: require('../assets/images/8.jpg'),
    },
    {
      id: '10',
      name: 'Tailor 10',
      category: 'Gents',
      details: 'Occassions and festives',
      image: require('../assets/images/6.jpg'),
    },
    {
      id: '11',
      name: 'Tailor 11',
      category: 'Ladies',
      details: 'wedding and festives',
      image: require('../assets/images/7.jpg'),
    },
    {
      id: '12',
      name: 'Tailor 12',
      category: 'Ladies',
      details: 'Expert in designing dresses and gowns.',
      image: require('../assets/images/2.jpg'),
    },
    {
      id: '13',
      name: 'Tailor 13',
      category: 'Gents',
      details: 'Specializes in suits and formal wear.',
      image: require('../assets/images/4.jpg'),
    },
    {
      id: '14',
      name: 'Tailor 14',
      category: 'All',
      details: 'Casual wear',
      image: require('../assets/images/3.jpg'),
    },
    {
      id: '15',
      name: 'Tailor 15',
      category: 'Gents',
      details: 'Occassions and festives',
      image: require('../assets/images/5.jpg'),
    },
  ];
  
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (category) => {
    // Filter tailors based on the category and details 
    
    const results = tailorData.filter((tailor) =>
      tailor.category.toLowerCase().includes(category.toLowerCase()) ||
      tailor.details.toLowerCase().includes(category.toLowerCase())
    );
    
    setSearchResults(results);
  };
  
 

  return (
    <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}>
    <>
        <SearchBar navigation={navigation} onSearch={handleSearch} />
        <SearchCard navigation={navigation} searchData={searchResults} /> 
    </>
    </TouchableWithoutFeedback>
  );
};


export {Search};