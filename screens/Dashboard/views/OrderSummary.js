import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import DashboardCard from '../../../components/dashboard/DashboardCard';
import OrderProgressChart from '../../../components/dashboard/OrderProgressChart';
import { ScrollView } from 'react-native-gesture-handler';


function OrderSummary () {
  return (
    <ScrollView>
    <View style={{flexDirection: 'col', alignItems: 'left', justifyContent: 'center', padding: 10}}>
      <Text style={styles.heading}>Orders Summary</Text>
      
      <View >
        <OrderProgressChart/>
      </View>

      < View  style={{marginVertical : 8}}>
        <View style={styles.container}>
          <DashboardCard title="Total" number="42" icon="tasks" color="#734EB0" />
        </View>
        <View>  
          <DashboardCard title="Complete" number="19878" icon="check-circle" color="#28159E" />
        </View>
        <View  style={styles.container}>
          <DashboardCard title="In Progress" number="12" icon="spinner" color="#5CA2D4" />
          </View>
        <View>
          <DashboardCard title="Pending" number="12" icon="clock-o" color="#C5B8E7" />
        </View>
      </View>
    </View>
    </ScrollView>
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
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
  }
});

export default OrderSummary;
