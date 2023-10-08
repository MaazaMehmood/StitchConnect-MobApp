import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import DashboardCard from '../../../components/dashboard/DashboardCard';
import OrderProgressChart from '../../../components/dashboard/OrderProgressChart';


function OrderSummary () {
  return (
    <View style={{flexDirection: 'col', alignItems: 'left', justifyContent: 'center', padding: 10}}>
      <Text style={styles.heading}>Orders Summary</Text>
      
      <View >
        <OrderProgressChart/>
      </View>

      <View style={styles.container}>
        <DashboardCard title="Total" number="42" icon="tasks" color="#3184B4" />
      </View>
      <View  style={styles.container}>
        <DashboardCard title="Complete" number="18" icon="check-circle" color="#28159E" />
      </View>
      <View  style={styles.container}>
        <DashboardCard title="In Progress" number="12" icon="spinner" color="#734EB0" />
      </View>
      <View  style={styles.container}>
        <DashboardCard title="Pending" number="12" icon="clock-o" color="#4891A1" />
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
  }
});

export default OrderSummary;
