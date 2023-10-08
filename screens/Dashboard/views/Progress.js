import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import DashboardCard from '../../../components/dashboard/DashboardCard';
import TailorProgressChart from '../../../components/dashboard/TailorProgressChart';


function Progress () {
  return (
    <View style={{flexDirection: 'col', alignItems: 'left', justifyContent: 'center', padding: 10}}>
      <Text style={styles.heading}>Balance</Text>
    
      <View style={styles.container}>
        <DashboardCard title="earning" number="200" icon="dollar" color="#A564D3" />
        <DashboardCard title="activity" number="5.6%" icon="building" color="#50CA46" />
      </View>

      <Text style={styles.heading}>Progress</Text>

      <View>
        <TailorProgressChart/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
    marginVertical: 8
  }
});

export default Progress;
