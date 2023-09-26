import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import HomeCard from '../components/HomeCard';
import SearchCard from '../components/SearchCard';
import CustomIcon from '../components/CustomIcon';


const Home = ({ navigation }) => {
  // sample data

  const tailorData = [
    {
      id: '1',
      name: 'Tailor 1',
      category: 'Gents',
      details: 'Specializes in suits and formal wear.',
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
      details: 'Expert in designing dresses and gowns.',
      image: '',
    }
  ];
  
  const [renderSearch, setRenderSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (category) => {
    // Filter tailors based on the selected category
    const results = tailorData.filter((tailor) =>
      tailor.category.toLowerCase().includes(category.toLowerCase())
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
          <TouchableOpacity onPress={handleBack} style={{ backgroundColor: '#ffff', paddingLeft: 10}}>
              <CustomIcon iconName="arrow-back-outline" color="grey" />
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