import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';


const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // X-axis labels (e.g., months)
    datasets: [
      {
        data: [10, 15, 7, 20, 12], // Progress values corresponding to the labels
        color: (opacity = 1) => `rgba(128, 50, 255, ${opacity})`, // Line color
        strokeWidth: 2, // Line width
      },
    ],
  };

  const TailorProgressChart = () => {
    return (
      <View>
        <LineChart
          data={chartData}
          width={Dimensions.get('window').width}
          height={320}
          yAxisLabel="%"
          chartConfig={{
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            color: (opacity = 1) => `rgba(130, 100, 227, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
            padding: 10,
            borderRadius: 16,
          }}
          bezier // Use Bezier curve for the line chart
        />
      </View>
    );
  };
  
  export default TailorProgressChart;
  