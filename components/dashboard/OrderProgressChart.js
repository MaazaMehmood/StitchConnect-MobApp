import React from 'react';
import { View } from 'react-native';
import { ProgressChart, PieChart } from 'react-native-chart-kit';


// const chartData = {
//   labels: ["pending", "progress", "complete"],  //status
//   data: [0.4, 0.6, 0.8]
// };

const data = [
  {
    name: "total",
    data: 42,
    color: "#9579E3",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "complete",
    data: 18,
    color: "#28159E",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "in progress",
    data: 12,
    color: "#5CA2D4",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "pending",
    data: 12,
    color: "#C5B8E7",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  }
];

const OrderProgressChart = () => {

  return (
    <View style={{borderRadius: 10, alignItems: 'center', overflow: 'scroll'}}>
      {/* <ProgressChart
        data={chartData}
        width={330}
        height={320}
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
      /> */}

      <PieChart
        data={data}
        width={500}
        height={280}
        chartConfig={{
          backgroundGradientFrom: '#ffff',
          backgroundGradientTo: '#FDFBFB',
          color: (opacity = 1) => `rgba(149, 121, 227, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor={"data"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[60, 0]}
        absolute
      />
    </View>
  );
};

export default OrderProgressChart;
