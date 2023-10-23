import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



const DashboardCard = ({ title, number, icon, color }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <FontAwesome name={icon} size={25} color={color} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItem: 'center', width: '80%', marginLeft: 5 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.number}>{number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    padding: 8,
    margin: 3,
    width: '100%',
    height: 60,
    backgroundColor: '#FCFBFB'
  },
  iconContainer: {
    borderRadius: 100,
    margin: 5,
    justifyContent: 'center',
    alignItem: 'center'
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: '#444',
  },
  number: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export {DashboardCard};
