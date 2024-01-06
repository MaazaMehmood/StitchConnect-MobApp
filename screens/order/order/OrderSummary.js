import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Divider, TextInput } from 'react-native-paper';
import { CustomIcon } from '../../../components/CustomIcon';
import { FontAwesome } from '@expo/vector-icons';


const { width, height } = Dimensions.get("screen");


function OrderSummary ({ navigation, garmentStatus, garmentDetails, measurements, handleCustomerData, toggleSection }) {

    const[deliveryDate, setDeliveryDate] = useState('');

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');

    const handleData = () => {
        const dataToPass = {
          name, contact
        };

        handleCustomerData(dataToPass);
        if (name != "" ) { toggleSection('billing') }
      };

  return (

    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={ styles.section }>
            <View style={{ flexDirection: 'row', justifyContent: 'left', alignItems: 'center', marginVertical: 10 }}>
                <Image source={require('../../../assets/images/SC.png')} style={{ height: 80, width: 80,}}/>
                <View style={{ marginLeft: 8}}>
                    <Text style={styles.sectionTitle}>Shah jee</Text>
                    <Text style={{ color: '#9579E3'}}> LS-51 Block 16 FB Area, Karachi</Text>
                </View>  
            </View>
             
            <View style={{ marginVertical: 5}}>
                <Text style={styles.title}>Order Date</Text>
                <Text style={{ fontSize: 14 , marginHorizontal: 5}}>Dec 15, 2023</Text>
            </View>
            <View style={{ marginVertical: 5}}>
                <Text style={styles.title}>Order Status</Text>
                <Text style={{ fontSize: 14, color: '#999', marginHorizontal: 5}}>not delivered</Text>
            </View>
            <View style={{ marginVertical: 5}}>
                <Text style={styles.title}>Delivery Date</Text>
                <TextInput
                    style={styles.input}
                    label=""
                    value={deliveryDate}
                    onChangeText={text => setDeliveryDate(text)}
                    mode='outlined'
                    outlineColor='#CBC5DC'
                    activeOutlineColor='#B7A8DF'
                />
            </View>
        </View>

        <View style={styles.section}>
            <Text style={styles.title}>Contact</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 3}}>
                <CustomIcon iconName='person-circle-sharp' color='#9579E3' />
                <TextInput
                    style={styles.input}
                    label="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    mode='underlined'
                    underlineColor='#CBC5DC'
                    activeUnderlineColor='#B7A8DF'
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 3}}>
                <FontAwesome name="phone" size={22} color="#9579E3" />   
                <TextInput
                    style={styles.input}
                    label="Contact"
                    value={contact}
                    keyboardType='numeric'
                    onChangeText={text => setContact(text)}
                    mode='underlined'
                    underlineColor='#CBC5DC'
                    activeUnderlineColor='#B7A8DF'
                />
            </View>
            
        </View>

        <View style={styles.section}>
            <Text style={{fontSize: 18, fontWeight: '500', margin: 5}}>Order Summary</Text>
            <Text style={styles.title}>Garments Style</Text>
            {Object.keys(garmentStatus).map((garmentType) => (
            garmentStatus[garmentType] && (
                <Text key={garmentType}  style={{ alignItems: 'center', margin: 5, color: '#555' }} >{garmentType}</Text>
            )))}
        </View>
        
        <View style={styles.section}>
            <Text style={styles.title}>Description</Text>
            {Object.keys(garmentDetails).map((garmentType) => (
            garmentStatus[garmentType] && (
                <View key={garmentType} style={{ margin: 3 }}>
                    <Text style={{fontSize: 14, fontWeight: '500', marginVertical: 5}}> {garmentType} </Text>
                    <Divider/>
                    <Text style={{alignItems: 'center', marginVertical: 10, color: '#555'}} > {garmentDetails[garmentType]} </Text>
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

            <View style={{flexDirection: 'col', justifyContent: 'center', alignItems: 'right', marginHorizontal: 10}}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#9579E3',}]}
                    onPress={handleData}
                >
                    <Text style={styles.buttonText}>next</Text>
                </TouchableOpacity>
            </View>
        </View>
       
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FCFAFA',
    padding: 2
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight:'500',
    color: '#222'
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 5,
    marginTop: 3,
    width: '100%',
    shadowColor: '#9999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  input: {
    alignItems: 'left',
    marginBottom: 2,
    color: '#777',
    backgroundColor: 'transparent',
    fontSize:  14,
    overflowX: 'scroll',
    width: '99%'
  },
  title: {
    fontSize: 15,
    fontWeight: '500', 
    margin: 5, 
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',

  },
});


export {OrderSummary};
