import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


function OrderDetails ({ route }) {
//   const { order } = route.params; 

    const order = [
        {
            orderId: '1',
            customerName: 'Abc',
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
        ]},
        {
            orderId: '2',
            customerName: 'xyz',
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
        ]},
        {
            orderId: '3',
            customerName: 'hkj',
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
        ]},
        
    ];
  

  return (
    <ScrollView style={styles.container}>
      <View style={{marginBottom: 18}}>
        <Text style={styles.title}>Order Details</Text>
      </View>
        {order.map((order, index) => (
        <View key={index} style={styles.card}>
            <View style={{ marginLeft: '90%'}}>
                <FontAwesome name='check-circle-o' size={23} color='green' />
            </View>
            <View style={styles.customerInfo}>
                <Text>Name: {order.customerName}</Text>
                <Text>Email: {order.customerAddress}</Text>
                <Text>Contact: {order.customerContact}</Text>
            </View>
            <View style={styles.orderItems}>
                <Text style={styles.sectionTitle}>Order Items:</Text>
                {order.items.map((item, index) => (
                    
                    <View key={index} style={styles.item}>
                        <Text>{item.productName}</Text>
                        <Text>Quantity: {item.quantity}</Text>
                        <Text>Price: ${item.price}</Text>
                    </View>
                       
                ))}
            </View>
        </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
    marginHorizontal: 10
  },
  card: {
    alignItem: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    padding: 20,
    margin: 3,
    backgroundColor: '#FCFAFA',
    width: '100%',
    height: 200
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
  },
  customerInfo: {
    marginVertical: 0,
  },
  orderItems: {
    marginBottom: 30
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
});


export  {OrderDetails};
