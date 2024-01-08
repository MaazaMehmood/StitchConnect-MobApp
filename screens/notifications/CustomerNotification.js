import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { List, Divider, Title } from 'react-native-paper';



function CustomerNotification () {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>You have 2 new notifications today</Text>
        <View>
            <Text style={{fontSize: 18, fontWeight: 'bold', margin: 5, color: '#333'}}>Today</Text>
            <View style={styles.section}>
                <TouchableOpacity>
                  <List.Section>
                    <List.Subheader style={styles.subheader}>Order Updates</List.Subheader>
                    <List.Item
                        title="Order Confirmed"
                        description="Your order has been confirmed by the tailor."
                        titleStyle={styles.itemTitle}
                        descriptionStyle={styles.itemDescription}
                    />
                    {/* Add more order update related notifications */}
                  </List.Section>
                </TouchableOpacity>

                <Divider />
                <TouchableOpacity>
                  <List.Section>
                      <List.Subheader style={styles.subheader}>Delivery Notifications</List.Subheader>
                      <List.Item
                          title="Order Out for Delivery"
                          description="Your order is out for delivery."
                          titleStyle={styles.itemTitle}
                          descriptionStyle={styles.itemDescription}
                      />
                      {/* Add more delivery related notifications */}
                  </List.Section>
                </TouchableOpacity>
            </View>
            
            <Text style={{fontSize: 18, fontWeight: 'bold', margin: 5, color: '#333'}}>This Week</Text>
            <View style={styles.section}>
              <TouchableOpacity>
                <List.Section>
                    <List.Subheader style={styles.subheader}>Tailor Updates</List.Subheader>
                    <List.Item
                        title="New Design Collection Available"
                        description="Check out the latest designs from your favorite tailor."
                        titleStyle={styles.itemTitle}
                        descriptionStyle={styles.itemDescription}
                    />
                    {/* Add more tailor update related notifications */}
                </List.Section>
              </TouchableOpacity>

              <Divider />

              <TouchableOpacity>
                <List.Section>
                  <List.Subheader style={styles.subheader}>Special Offers/Promotions</List.Subheader>
                  <List.Item
                      title="Exclusive 20% Discount on Tailoring Services"
                      description="Avail of a 20% discount on your next order."
                      titleStyle={styles.itemTitle}
                      descriptionStyle={styles.itemDescription}
                  />
                  <List.Item
                      title="Offering 30% off on First Order"
                      description="your next order now!."
                      titleStyle={styles.itemTitle}
                      descriptionStyle={styles.itemDescription}
                  />
                  {/* Add more special offers/promotions related notifications */}
                </List.Section>
              </TouchableOpacity>

              <Divider />
              
              <TouchableOpacity>
                <List.Section>
                <List.Subheader style={styles.subheader}>Feedback Requests</List.Subheader>
                <List.Item
                    title="Please Provide Feedback on Your Recent Order"
                    description="We'd love to hear about your experience."
                    titleStyle={styles.itemTitle}
                    descriptionStyle={styles.itemDescription}
                />
                {/* Add more feedback request related notifications */}
                </List.Section>
              </TouchableOpacity>
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
    borderRadius: 10,
    borderColor: '#E5DCFF',
    borderWidth: 1,
  },
  subheader: {
    fontSize: 15,
    fontWeight: '700',
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

export  {CustomerNotification};
