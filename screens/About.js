import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, ImageBackground, FlatList } from 'react-native';
import { KeyFeaturesCard } from '../components/Cards/KeyFeaturesCard';


const { width, height } = Dimensions.get("screen");

function About () {

    const keyFeatures = [
        {
        name: 'person-outline',
        title: 'Browse Tailors',
        description: 'Browse a wide range of tailors  and their unique designs.',
        backgroundColor: '#16107F',
        },
        {
        name: 'book-outline',
        title: 'Place Orders',
        description: 'Place orders for custom-made garments with ease.',
        backgroundColor: '#189FE2',
        },
        {
        name: 'checkbox-outline',
        title: 'Receive Updates',
        description: 'Receive updates on order status and delivery.',
        backgroundColor: '#E39816',
        },
        {
        name: 'search-outline',
        title: 'Explore Trends',
        description: 'Explore the latest trends and design collections.',
        backgroundColor: '#9b59b6',
        },
        {
        name: 'receipt-outline',
        title: 'Leave Feedback',
        description: 'Leave feedback and reviews for tailors.',
        backgroundColor: '#CA1C47',
        },
    ];


  return (
    <ScrollView style={styles.container}>
        <ImageBackground 
        source={require('../assets/images/bg.png')}
        style={styles.header}>
            <View style={{ flexDirection:'row', justifyContent: 'left', alignItems: 'center'}}>
                <Text style={{ fontSize: 24, color: '#FFFFFF', fontWeight: '500' }}>About</Text>
                <Text style={{ fontSize: 24, color: '#FFFFFF', fontWeight: '300', marginHorizontal: 5 }}>Stitch Connect</Text>
            </View>
        </ImageBackground>

        <View style={styles.cardContainer}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={keyFeatures}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <KeyFeaturesCard
                    name={item.name}
                    title={item.title}
                    description={item.description}
                    backgroundColor={item.backgroundColor}
                    />
                )}
            /> 
        </View>
    
        <View style={styles.section}>
            <Text style={styles.subtitle}>Why stitch connect ?</Text>
            <Text style={styles.description}>
            Stitch Connect is a mobile application designed to connect customers with skilled tailors.
            Our platform aims to provide a seamless experience for ordering tailored garments.
            </Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.subtitle}>Contact Us</Text>
            <Text style={styles.description}>
            For any inquiries or support, please email us at support@stitichconnect.com.
            </Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.subtitle}>Version Information</Text>
            <Text style={styles.description}>
            Stitch Connect v1.0.0 {'\n'}
            Developed by StitchConnect Inc.
            </Text>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: width,
    height: height / 4,
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  cardContainer: {
    width: '100%',
    height: '40%',
    top: '-15%',
    position: 'relative',
  },
  section: {
    top: '-25%',
    margin: 10,
    padding: 5,
  },
  subtitle: {
    fontSize: 18,
    letterSpacing: .5,
    fontWeight: '500',
    marginBottom: 8,
    color: '#9579E3'
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333333',
  },
});

export {About};
