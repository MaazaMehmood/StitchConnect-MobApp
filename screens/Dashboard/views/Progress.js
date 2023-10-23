import React, { useState } from 'react';
import { View,Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import {TailorProgressChart} from '../../../components/dashboard/TailorProgressChart';
import {TailorActivityChart} from '../../../components/dashboard/TailorActivityChart';
import { FontAwesome } from '@expo/vector-icons';


function Progress () {

  const [activeSection, setActiveSection] = useState('activity');

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  return (
    
    <ScrollView>
    <View style={{flexDirection: 'col', alignItems: 'left', justifyContent: 'center', padding: 10}}>
      <Text style={styles.heading}>Balance</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 5, marginHorizontal: 50}}>
        <View style={styles.card}>
          <View style={{ margin: 5, alignItem: 'center'}}>
            <FontAwesome name='dollar' size={23} color="#555" />
          </View>
          <View style={{ flexDirection: 'col', justifyContent: 'center', alignItem: 'center', marginLeft: 8 , width: '80%'}}>
            <Text style={{ fontSize: 14, color: '#888'}}>earning</Text>
            <Text style={styles.data}>PKR 23687</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{ margin: 5}}>
            <FontAwesome name='dollar' size={23} color="#555" />
          </View>
          <View style={{ flexDirection: 'col', justifyContent: 'center', alignItem: 'center', marginLeft: 8 , width: '80%'}}>
            <Text style={{ fontSize: 14, color: '#888'}}>revenue</Text>
            <Text style={styles.data}>PKR 4200</Text>
          </View>
        </View>
      </View>
      
      {/* Toggle Buttons */}
      <View style={styles.toggleButtons}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeSection === 'activity' && styles.activeToggleButton,
          ]}
          onPress={() => toggleSection('activity')}
        >
          <Text style={[styles.heading, activeSection === 'activity' && styles.activeToggleButtonText]}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeSection === 'progress' && styles.activeToggleButton,
          ]}
          onPress={() => toggleSection('progress')}
        >
          <Text style={[styles.heading, activeSection === 'progress' && styles.activeToggleButtonText]}>Progress</Text>
        </TouchableOpacity>
      </View>

      {activeSection === 'activity' && (
          <TailorActivityChart/>
      )}
      {activeSection === 'progress' && (
          <TailorProgressChart/>
      )}

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
    marginVertical: 5
  },
  card: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItem: 'center',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    padding: 8,
    margin: 5,
    backgroundColor: '#FCFBFB',
    width: '70%',
  },
  data: {
    fontSize: 16, 
    color: '#9579E3', 
    fontWeight: '500', 
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  toggleButtons: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'left',
    marginVertical: 10,
  },
  toggleButton: {
    padding: 8,
  },
  activeToggleButton: {
    borderBottomWidth: 1,
    borderColor: '#9579E3',
  },
  activeToggleButtonText: {
    color: "#9579E3"
  },
});

export {Progress};
