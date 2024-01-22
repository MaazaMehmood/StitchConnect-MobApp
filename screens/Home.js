import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { HomeCard } from '../components/Cards/HomeCard';
import axios from 'axios';



function Home({ navigation }) {
  // const [tailorData, setTailorData] = useState([]);
  const tailorData = [
    {
      id: '1',
      name: 'Tailor 1',
      category: 'Ladies',
      details: 'wedding and festives',
      image: require('../assets/images/1.jpg'),
    },
    {
      id: '2',
      name: 'Tailor 2',
      category: 'Ladies',
      details: 'Expert in designing dresses and gowns.',
      image: require('../assets/images/2.jpg'),
    },
    {
      id: '3',
      name: 'Tailor 3',
      category: 'Gents',
      details: 'Specializes in suits and formal wear.',
      image: require('../assets/images/3.jpg'),
    },
    {
      id: '4',
      name: 'Tailor 4',
      category: 'All',
      details: 'Casual wear',
      image: require('../assets/images/4.jpg'),
    },
    {
      id: '5',
      name: 'Tailor 5',
      category: 'Gents',
      details: 'Occasions and festives',
      image: require('../assets/images/6.jpg'),
    },
  ];

  // const fetchDataFromAPI = async () => {
  //   try {

  //     const response = await axios.get('http://ec2-13-53-33-97.eu-north-1.compute.amazonaws.com/api/v1/tailor/getAllTailors/');
  //     const data = await response.json();

  //     console.log(data);

  //     if (data.success) {
  //       setTailorData(data.data);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchDataFromAPI();
  // }, []);

  const handleSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <>
        <SearchBar navigation={navigation} onSearch={handleSearch} />
        <HomeCard navigation={navigation} data={tailorData}  />
      </>
    </TouchableWithoutFeedback>
  );
}

export { Home };
