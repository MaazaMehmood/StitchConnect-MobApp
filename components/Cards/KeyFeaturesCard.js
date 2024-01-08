import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomIcon } from '../CustomIcon';


const KeyFeaturesCard = ({ title, name, description, backgroundColor }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <CustomIcon iconName={name}  color='#FFFFFF' />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 200
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 15,
    textAlign: 'center',
    color: '#fff',
  },
  cardDescription: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
  },
});

export {KeyFeaturesCard};
