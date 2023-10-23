import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';


// activity of a tailor in a month
const monthlyActivityData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      data: [15, 20, 45, 34], // tailor's activity data for each week
    },
  ],
};

const TailorActivityChart = () => {
  return (
    <View>
      <BarChart
        data={monthlyActivityData}
        width={350}
        height={320}
        yAxisLabel="ratio"
        fromZero
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(100, 50, 260, ${opacity})`, // Bar color
          labelColor: (opacity = 1) => `rgba(130, 100, 227, ${opacity})`, // Label color
          style: {
            borderRadius: 16,
          },
        }}
        style={{
            flexDirection: 'col',
            alignItems: 'center',
            justifyContent: 'center',
          }}
      />
    </View>
  );
};


export {TailorActivityChart};
