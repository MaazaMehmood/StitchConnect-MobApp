import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';


const { width, height } = Dimensions.get("screen");


function OrderSummary ({ navigation, garmentStatus, garmentDetails, measurements, name, address }) {

  return (

    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={ [ styles.section , { backgroundColor: '#9579E3', padding: 10}]}>
            <Image source={require('../../../assets/images/SC.png')} style={{ height: 70, width: 70,}}/>
            <Text style={[styles.title, { color: '#ffff'}]}>Billing Address</Text>
            <Text style={[styles.sectionTitle, { color: '#ffff'}]}>Maaza Mehmood</Text>
            <Text style={{ color: '#ECEAEA'}} >abc area block 12, Karachi</Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.title}>Selected Garment Types</Text>
            {Object.keys(garmentStatus).map((garmentType) => (
            garmentStatus[garmentType] && (
                <Text key={garmentType}  style={{ alignItems: 'center', margin: 3 }} >{garmentType}</Text>
            )))}
        </View>
        
        <View style={styles.section}>
            <Text style={styles.title}>Garment Details</Text>
            {Object.keys(garmentDetails).map((garmentType) => (
            garmentStatus[garmentType] && (
                <View key={garmentType} style={{ margin: 3 }}>
                    <Text style={{fontSize: 14, fontWeight: '500', margin: 3}}>{garmentType}</Text>
                    <Text style={{ color: "#444"}} >{garmentDetails[garmentType]}</Text>
                </View>
            ))
            )}
        </View>
        
        <View style={styles.section}>
            <Text style={styles.title}>Measurements</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <Text style={{fontSize: 14, margin: 3}}> Length </Text>
                <Text style={{ fontWeight: '500',color: "#444"}}>{measurements.length}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <Text style={{fontSize: 14, margin: 3}}> Neck </Text>
                <Text style={{ fontWeight: '500', color: "#444"}}>{measurements.neck}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <Text style={{fontSize: 14, margin: 3}}> Shoulders </Text>
                <Text style={{ fontWeight: '500', color: "#444"}}>{measurements.shoulders}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <Text style={{fontSize: 14, margin: 3}}> Waist </Text>
                <Text style={{ fontWeight: '500', color: "#444"}}>{measurements.waist}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <Text style={{fontSize: 14, margin: 3}}> Sleeves </Text>
                <Text style={{ fontWeight: '500', color: "#444"}}>{measurements.sleeves}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <Text style={{fontSize: 14, margin: 3}}> Trouser </Text>
                <Text style={{ fontWeight: '500', color: "#444"}}>{measurements.trouser}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                <Text style={{fontSize: 14, margin: 3}}> Other </Text>
                <Text style={{ fontWeight: '500', color: "#444"}}>{measurements.other}</Text>
            </View>
        </View>

        <View style={styles.section}>
            <Text style={styles.title}>Payment</Text>
            <View style={{ backgroundColor: '#C5B8E7', flexDirection: 'row', justifyContent: 'space-between', margin: 3, padding: 10, borderRadius: 10}}>
                <Text style={{fontSize: 14, margin: 3}}> Sub Total </Text>
                <Text style={{ fontWeight: '500', fontSize: 16}}>PKR 688.7</Text>
            </View>
            <View style={{ backgroundColor: '#C5B8E7', flexDirection: 'row', justifyContent: 'space-between', margin: 5, padding: 10, borderRadius: 10}}>
                <Text style={{fontSize: 14, margin: 3}}> Total </Text>
                <Text style={{ fontWeight: '500', fontSize: 16}}>PKR 2900</Text>
            </View>
        </View>
       
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FCFAFA',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '500',
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 8,
    marginTop: 20,
    width: width,
    shadowColor: '#9999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '500', 
    marginVertical: 15, 
  },
});


export {OrderSummary};
