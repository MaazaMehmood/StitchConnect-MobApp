import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, ToggleButton } from 'react-native-paper';

function OrderDetails({ route }) {
  const [orderData, setOrderData] = useState([
    {
      orderId: '1',
      customerName: 'Fatima Shahid Imam',
      customerAddress: 'abc area block 2, Karachi',
      customerContact: '123-456-7890',
      items: [
        {
          itemId: 'item1',
          productName: 'T-shirt',
          quantity: 2,
          price: 20.0,
        },
        {
          itemId: 'item2',
          productName: 'Jeans',
          quantity: 1,
          price: 30.0,
        },
      ],
      status: 'Pending',
    },
    {
      orderId: '2',
      customerName: 'Abeeha Syed',
      customerAddress: 'abc area block 2, Karachi',
      customerContact: '123-456-7890',
      items: [
        {
          itemId: 'item1',
          productName: 'T-shirt',
          quantity: 2,
          price: 2000.0,
        },
        {
          itemId: 'item2',
          productName: 'Jeans',
          quantity: 1,
          price: 450.0,
        },
      ],
      status: 'In Progress',
    },
    {
      orderId: '3',
      customerName: 'Muhammad Kamran Ali',
      customerAddress: 'abc area block 2, Karachi',
      customerContact: '123-456-7890',
      items: [
        {
          itemId: 'item1',
          productName: 'T-shirt',
          quantity: 2,
          price: 200.0,
        },
        {
          itemId: 'item2',
          productName: 'Jeans',
          quantity: 1,
          price: 100.0,
        },
      ],
      status: 'Complete',
    },
  ]);

  const handleStatusChange = (index, newStatus) => {
    const updatedOrderData = [...orderData];
    updatedOrderData[index].status = newStatus;
    setOrderData(updatedOrderData);
  };

  return (
    <ScrollView style={styles.container}>
      {orderData.map((order, index) => (
        <Card key={index} style={styles.card}>
          <Card.Actions>
            <ToggleButton.Row onValueChange={(value) => handleStatusChange(index, value)} value={order.status}>
              <ToggleButton icon="clock" iconColor='#C5B8E7' value="pending" />
              <ToggleButton icon="progress-check" iconColor='#5CA2D4' value="in progress" />
              <ToggleButton icon="check" iconColor='#28159E' value="complete" />
            </ToggleButton.Row>
          </Card.Actions>
          <Card.Content>
            <Text style={{ fontWeight: '300' , color: '#9579E3'}}>{order.status}</Text>
            <Text style={styles.customerName}>{order.customerName}</Text>
            <Text>{order.customerAddress}</Text>
            <Text>Contact: {order.customerContact}</Text>
            <Text style={styles.sectionTitle}>Order Items</Text>
            {order.items.map((item, i) => (
              <View key={i} style={styles.item}>
                <Text>{item.productName}</Text>
                <Text>{item.quantity}</Text>
                <Text>Rs.{item.price}</Text>
              </View>
            ))}
            
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  card: {
    margin: 5,
  },
  customerName: {
    fontSize: 15,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#222',
    marginVertical: 5,
    padding: 3,
  },
  item: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

export { OrderDetails };
