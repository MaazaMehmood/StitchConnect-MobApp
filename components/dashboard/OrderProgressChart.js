import React from 'react';
import { View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';


const chartData = {
  labels: ["pending", "progress", "complete"],  //status
  data: [0.4, 0.6, 0.8]
};

const OrderProgressChart = () => {

  return (
    <View style={{borderRadius: 10, alignItems: 'center', overflow: 'scroll'}}>
      <ProgressChart
        data={chartData}
        width={330}
        height={220}
        strokeWidth={13}
        chartConfig={{
          backgroundGradientFrom: '#A788FF',
          backgroundGradientTo: '#FDFBFB',
          color: (opacity = 1) => `rgba(149, 121, 227, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          alignItems: 'center',
          marginVertical: 5,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default OrderProgressChart;
