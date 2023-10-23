import React, { useState } from 'react';
import { View,Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import {BillingDetails} from './order/BillingDetails';
import {OrderSummary} from './order/OrderSummary';
import {Payment} from './order/Payment';


const { width, height } = Dimensions.get("screen");


function Order ({ navigation , route }) {

  const { garmentStatus, garmentDetails, measurements } = route.params;

  const [activeSection, setActiveSection] = useState('billing');

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  return (
        <View style={styles.container} >

            {/* Toggle Buttons */}
            <View style={styles.toggleButtons}>
                <TouchableOpacity
                    style={[
                        styles.toggleButton,
                        activeSection === 'billing' && styles.activeToggleButton,
                    ]}
                >
                <Text style={[styles.heading, activeSection === 'billing' && styles.activeToggleButtonText]}>Billing Details</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.toggleButton,
                        activeSection === 'summary' && styles.activeToggleButton,
                    ]}
                >
                <Text style={[styles.heading, activeSection === 'summary' && styles.activeToggleButtonText]}>Summary</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.toggleButton,
                        activeSection === 'payment' && styles.activeToggleButton,
                    ]}
                >
                <Text style={[styles.heading, activeSection === 'payment' && styles.activeToggleButtonText]}>Payment</Text>
                </TouchableOpacity>
            </View>
            
            {activeSection === 'billing' && (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <BillingDetails/>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => toggleSection('summary')}
                    >
                        <Text style={[styles.buttonText, { marginLeft: '80%' }]}>next</Text>
                    </TouchableOpacity>
                </ScrollView>
            )}
            {activeSection === 'summary' && (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <OrderSummary  garmentStatus={garmentStatus} garmentDetails={garmentDetails} measurements={measurements}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10}}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => toggleSection('billing')}
                        >
                            <Text style={[styles.buttonText, { color: '#9999'}]}>back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => toggleSection('payment')}
                        >
                            <Text style={styles.buttonText}>continue</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
            )}
            {activeSection === 'payment' && (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Payment/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10}}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => toggleSection('summary')}
                        >
                            <Text style={[styles.buttonText, { color: '#9999'}]}>back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            // onPress={}
                        >
                            <Text style={styles.buttonText}>confirm</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )}

        </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    paddingVertical: 5,
    backgroundColor: '#ffffff',
  },
  toggleButtons: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  toggleButton: {
    padding: 8,
    marginHorizontal: 20,
  },
  activeToggleButton: {
    borderBottomWidth: 1,
    borderColor: '#9579E3',
  },
  heading: {
    color: '#999'
  },
  activeToggleButtonText: {
    color: "#9579E3"
  },
  button: {
    padding: 8,
    backgroundColor: '#transparent',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '500',
    color: '#9579E3',
    fontSize: 18,
    textDecorationLine: 'underline'
  },
});


export {Order};
