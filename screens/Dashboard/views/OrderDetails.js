import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


function OrderDetails ({ route }) {
//   const { order } = route.params; 

    const order = [
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
        ]},
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
        ]},
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
                {/* <FontAwesome name='check-circle-o' size={20} color='green' /> */}
            </View>
            <View style={styles.customerInfo}>
                <Text style={{fontSize: 18, color: '#222'}}> {order.customerName}</Text>
                <Text> {order.customerContact}</Text>
                <Text style={{ color: '#9579E3'}}> {order.customerAddress}</Text>
            </View>
            <View style={styles.orderItems}>
                <Text style={styles.sectionTitle}>Order Items</Text>
                {order.items.map((item, index) => (
                    
                    <View key={index} style={styles.item}>
                        <Text>{item.productName}</Text>
                        <Text> {item.quantity}</Text>
                        <Text style={{ color: '#111', fontWeight: 500, fontSize: 16}}>Rs. {item.price}</Text>
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
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginHorizontal: 10
  },
  card: {
    alignItem: 'center',
    justifyContent:'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    padding: 20,
    margin: 5,
    backgroundColor: '#FCFAFA',
    width: '100%',
    height: 200
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
    marginVertical: 5,
    padding: 5
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
