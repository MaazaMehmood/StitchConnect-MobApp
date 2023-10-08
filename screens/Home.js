import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import HomeCard from '../components/Cards/HomeCard';
import SearchCard from '../components/Cards/SearchCard';
import CustomIcon from '../components/CustomIcon';


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
  
  const [renderSearch, setRenderSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (category) => {
    // Filter tailors based on the category and details 
    
    const results = tailorData.filter((tailor) =>
      tailor.category.toLowerCase().includes(category.toLowerCase()) ||
      tailor.details.toLowerCase().includes(category.toLowerCase())
    );
    
    setSearchResults(results);
    setRenderSearch(true);
  };

  const handleBack = () => {
    setRenderSearch(false); // Set renderSearch to false to show the previous content
  };
  
 

  return (
    <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}>
    <>
      <SearchBar onSearch={handleSearch} />
      
      { renderSearch ? (
        <>
          <TouchableOpacity onPress={handleBack} style={{ backgroundColor: '#FAF9F9', paddingLeft: 10}}>
              <CustomIcon iconName="chevron-back-outline" color="grey" />
          </TouchableOpacity>
          <SearchCard searchData={searchResults} />
        </>
          ) :  ( <HomeCard data={tailorData} /> )
      }
        
    </>
    </TouchableWithoutFeedback>
    
  );
};


export default Home;