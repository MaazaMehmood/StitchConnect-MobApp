import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Divider } from 'react-native-paper';


const { width, height } = Dimensions.get("screen");

function OrderSummary ({ navigation , route }) {

  const { garmentStatus, garmentDetails, measurements } = route.params;

  const handlePay = () => {
    navigation.navigate('Payment');
  }

  return (

    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        <View style={{ flexDirection: 'column', justifyContent: 'space-around', margin: 15 }}>
            <Text style={styles.sectionTitle}>Shah jee</Text>
            <Text>abc area block 12, Karachi</Text>
        </View>

       <ScrollView style={styles.sectionView}>
            <View style={styles.section}>
                <Text style={styles.title}>Selected Garment Types</Text>
                {Object.keys(garmentStatus).map((garmentType) => (
                garmentStatus[garmentType] && (
                    <Text key={garmentType}  style={{ alignItems: 'center', margin: 3 }} >{garmentType}</Text>
                )))}
            </View>
            <Divider/>
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
            <Divider/>
            <View style={styles.section}>
                <Text style={styles.title}>Measurements</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                    <Text style={{fontSize: 14, margin: 3}}> Length </Text>
                    <Text style={{ fontWeight: '500'}}>{measurements.length}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                    <Text style={{fontSize: 14, margin: 3}}> Neck </Text>
                    <Text style={{ fontWeight: '500'}}>{measurements.neck}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                    <Text style={{fontSize: 14, margin: 3}}> Shoulders </Text>
                    <Text style={{ fontWeight: '500'}}>{measurements.shoulders}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                    <Text style={{fontSize: 14, margin: 3}}> Waist </Text>
                    <Text style={{ fontWeight: '500'}}>{measurements.waist}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                    <Text style={{fontSize: 14, margin: 3}}> Sleeves </Text>
                    <Text style={{ fontWeight: '500'}}>{measurements.sleeves}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                    <Text style={{fontSize: 14, margin: 3}}> Trouser </Text>
                    <Text style={{ fontWeight: '500'}}>{measurements.trouser}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                    <Text style={{fontSize: 14, margin: 3}}> Other </Text>
                    <Text style={{ fontWeight: '500'}}>{measurements.other}</Text>
                </View>
            </View>
        </ScrollView>

        <TouchableOpacity
            style={styles.button}
            onPress={handlePay}
        >
            <Text style={styles.buttonText}>continue</Text>
        </TouchableOpacity>

       
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
  sectionView : {
     flex: 1,
     backgroundColor: '#ffffff',
     shadowColor: '#000000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.2,
     shadowRadius: 2,
     elevation: 3,
     padding: 3,
     width: '100%',
    //  height: height / 1.3,
  },
  section: {
    margin: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500', 
    marginVertical: 15, 
  },
  button: {
    padding: 15,
    paddingRight: 50,
    paddingLeft: 50,
    borderRadius: 50,
    backgroundColor: '#9579E3',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '500',
    color: '#ffffff',
    fontSize: 18,
  }
});

export default OrderSummary;
