import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';



const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'], // X-axis labels (e.g., months)
    datasets: [
      {
        data: [10, 15, 7, 20, 12, 40], // Progress values corresponding to the labels
        color: (opacity = 1) => `rgba(130, 100, 257, ${opacity})`,  // Line color
        strokeWidth: 2, // Line width
      },
    ],
  };

  const TailorProgressChart = () => {
    return (
      <View>
        <LineChart
          data={chartData}
          width={350}
          height={320}
          yAxisLabel="%"
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#ffff',
            color: (opacity = 1) => `rgba(130, 100, 227, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            padding: 8,
            borderRadius: 10,
          }}
            // Use Bezier curve for the line chart
        />
      </View>
    );
  };
  
  export default TailorProgressChart;
  