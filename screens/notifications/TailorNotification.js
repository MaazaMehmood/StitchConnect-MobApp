import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { List, Divider, Title } from 'react-native-paper';



function TailorNotification () {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>You have 1 new notifications today</Text>
        <View>
            <Text style={{fontSize: 18, fontWeight: '500', margin: 5, color: '#333'}}>Today</Text>
            <View style={styles.section}>
                <List.Section>
                    <List.Subheader style={styles.subheader}>Order Requests</List.Subheader>
                    <List.Item
                        title="New Order Request Received"
                        description="You have a new order request from a customer."
                        titleStyle={styles.itemTitle}
                        descriptionStyle={styles.itemDescription}
                    />
                    {/* Add more order update related notifications */}
                </List.Section>
            </View>
            
            <Text style={{fontSize: 18, fontWeight: '500', margin: 5, color: '#333'}}>This Week</Text>
            <View style={styles.section}>
                <List.Section>
                    <List.Subheader style={styles.subheader}>Order Updates</List.Subheader>
                    <List.Item
                        title="Order Status Update"
                        description="Your order is now being processed by the tailor."
                        titleStyle={styles.itemTitle}
                        descriptionStyle={styles.itemDescription}
                    />
                    {/* Add more delivery related notifications */}
                </List.Section>
                <List.Section>
                    <List.Subheader style={styles.subheader}>Customer Requests</List.Subheader>
                    <List.Item
                        title="Customer Measurement Submitted"
                        description="A customer has submitted their measurements."
                        titleStyle={styles.itemTitle}
                        descriptionStyle={styles.itemDescription}
                    />
                    {/* Add more tailor update related notifications */}
                </List.Section>

                <Divider />

                <List.Section>
                    <List.Subheader style={styles.subheader}>Design Updates</List.Subheader>
                    <List.Item
                        title="New Fabric Trend Alert"
                        description="Check out the latest fabric trends for tailoring."
                        titleStyle={styles.itemTitle}
                        descriptionStyle={styles.itemDescription}
                    />
                    <List.Item
                        title="Offering 30% off on First Order"
                        description="your next order here!."
                        titleStyle={styles.itemTitle}
                        descriptionStyle={styles.itemDescription}
                    />
                    {/* Add more special offers/promotions related notifications */}
                </List.Section>
            </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FCFAFA',
      },
      title: {
        textAlign: 'left',
        margin: 5,
        fontSize: 14,
        fontWeight: '500',
        color: '#9579E3'
      },
      section: {
        backgroundColor: '#ffffff',
        marginVertical: 5,
        width: '100%',
        shadowColor: '#9999',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        borderRadius: 10
      },
      subheader: {
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 3,
        color: '#555555',
      },
      itemTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#9579E3',
      },
      itemDescription: {
        fontSize: 14,
        color: '#777777',
      },
});

export  {TailorNotification};
