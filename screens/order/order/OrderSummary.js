import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Divider } from 'react-native-paper';


const { width, height } = Dimensions.get("screen");


function OrderSummary ({ navigation, garmentStatus, garmentDetails, measurements, name, address }) {

  return (

    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={ styles.section }>
            <View style={{ flexDirection: 'row', justifyContent: 'left', alignItems: 'center', marginVertical: 10 }}>
                <Image source={require('../../../assets/images/SC.png')} style={{ height: 80, width: 80,}}/>
                <Text style={styles.sectionTitle}>Shah jee</Text>
            </View>
             
            <View style={{ marginVertical: 5}}>
                <Text style={styles.title}>Order Date</Text>
                <Text style={{ fontSize: 14 }}>Dec 15, 2023</Text>
            </View>
            <View style={{ marginVertical: 5}}>
                <Text style={styles.title}>Order Status</Text>
                <Text style={{ fontSize: 14, color: '#999'}}>not recieved</Text>
            </View>
        </View>

        <View style={styles.section}>
            <Text style={styles.title}>Garments Style</Text>
            {Object.keys(garmentStatus).map((garmentType) => (
            garmentStatus[garmentType] && (
                <Text key={garmentType}  style={{ alignItems: 'center', margin: 3 }} >{garmentType}</Text>
            )))}
        </View>
        
        <View style={styles.section}>
            <Text style={styles.title}>Description</Text>
            {Object.keys(garmentDetails).map((garmentType) => (
            garmentStatus[garmentType] && (
                <View key={garmentType} style={{ margin: 3 }}>
                    <Text style={{fontSize: 14, fontWeight: '500', marginVertical: 5}}> {garmentType} # 1</Text>
                    <Divider/>
                    <Text style={{alignItems: 'center', marginVertical: 10}} > {garmentDetails[garmentType]} </Text>
                </View>
            ))
            )}
        </View>
        
        <View style={styles.section}>
            <Text style={styles.title}>Measurements</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <Text style={{fontSize: 14, margin: 3}}> Length </Text>
                <Text style={{ fontWeight: '500',color: "#444", margin: 3}}>{measurements.length}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <Text style={{fontSize: 14, margin: 3}}> Neck </Text>
                <Text style={{ fontWeight: '500', color: "#444", margin: 3}}>{measurements.neck}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <Text style={{fontSize: 14, margin: 3}}> Shoulders </Text>
                <Text style={{ fontWeight: '500', color: "#444", margin: 3}}>{measurements.shoulders}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <Text style={{fontSize: 14, margin: 3}}> Waist </Text>
                <Text style={{ fontWeight: '500', color: "#444",  margin: 3}}>{measurements.waist}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <Text style={{fontSize: 14, margin: 3}}> Sleeves </Text>
                <Text style={{ fontWeight: '500', color: "#444",  margin: 3}}>{measurements.sleeves}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <Text style={{fontSize: 14, margin: 3}}> Trouser </Text>
                <Text style={{ fontWeight: '500', color: "#444",  margin: 3}}>{measurements.trouser}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <Text style={{fontSize: 14, margin: 3}}> Other </Text>
                <Text style={{ fontWeight: '500', color: "#444", margin: 3}}>{measurements.other}</Text>
            </View>
        </View>

        <View style={styles.section}>
            <Text style={styles.title}>Payment</Text>
            <View style={{flexDirection: 'col', justifyContent: 'center', marginVertical: 3}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, borderRadius: 8}}>
                    <Text style={{fontSize: 14, margin: 3, color: '#888'}}> Sub Total </Text>
                    <Text style={{ fontWeight: '500', fontSize: 16}}>Rs.688.7</Text>
                </View>
                <View style={{ backgroundColor: '#F9F8FC', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, padding: 10, borderRadius: 8}}>
                    <Text style={{fontSize: 14, margin: 3, color: '#888'}}> Total </Text>
                    <Text style={{ fontWeight: '500', fontSize: 16}}>Rs.2900</Text>
                </View>
            </View>
        </View>
       
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FCFAFA',
    padding: 5
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
    color: '#222'
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 8,
    marginTop: 3,
    width: '100%',
    shadowColor: '#9999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '500', 
    marginVertical: 10, 
  },
});


export {OrderSummary};
