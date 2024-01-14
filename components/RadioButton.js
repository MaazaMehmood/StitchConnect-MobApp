import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const RadioButton = ({ options, selectedOption, onSelect }) => {
  return (
    < View style={styles.radioContainer} >
    {options.map((option, index) => (
      <TouchableOpacity
        key={index} // Use index as the key
        item={option}
        style={[styles.radioOption, { backgroundColor: selectedOption === option ? '#9579E3' : 'white' }, { borderColor: selectedOption === option ? 'white' : '#A98ADC' }]}
        onPress={() => onSelect(option)}
      >
        <Text style={[styles.radioText, {  color: selectedOption === option ? 'white' : '#9579E3' }]}>{option}</Text>
      </TouchableOpacity>
    ))}
    
    </View>
  );
};


const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'col',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  radioOption: {
    padding: 15,
    paddingRight: 50,
    paddingLeft: 50,
    borderRadius: 10,
    borderWidth: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 190
  },
  radioText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#ffff',
  }
});

export {RadioButton};
