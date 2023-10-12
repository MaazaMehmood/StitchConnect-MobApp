import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({ navigation,  onSearch }) => {

  const handleOnFocus = () => {
    navigation.navigate('Search');
  }
   
  const [category, setCategory] = useState('');
  
  const handleSearch = () => {
    onSearch(category);
  };

  return (
    <View style={styles.container} >
        <TextInput
            onFocus={handleOnFocus}
            style={styles.input}
            placeholder="Search by category"
            onChangeText={(text) => {
              onSearch(text)
              setCategory(text)
            }}
            clearTextOnFocus={true}
            value={category}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.button} >
            <Feather name="search" size={23} color="black" />      
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffff'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    color: '#777',
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  button: {
    margin: 5,
  },

});

export default SearchBar;
