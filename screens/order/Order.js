import React, { useState } from 'react';
import { View,Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import {OrderSummary} from './order/OrderSummary';
import { BillingDetails } from './order/BillingDetails';


const { width, height } = Dimensions.get("screen");


function Order ({ navigation , route }) {

  const [customerData, setCustomerData] = useState({});

  const { garmentStatus, garmentDetails, measurements } = route.params;
  const [activeSection, setActiveSection] = useState('summary');

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  const handleCustomerData = (data) => {
    setCustomerData(data);
  };

  return (
        <View style={styles.container} >

            {/* Toggle Buttons */}
            <View style={styles.toggleButtons}>
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
                        activeSection === 'billing' && styles.activeToggleButton,
                    ]}
                >
                <Text style={[styles.heading, activeSection === 'billing' && styles.activeToggleButtonText]}>Billing Details</Text>
                </TouchableOpacity>
            </View>
            
            {activeSection === 'summary' && (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <OrderSummary  garmentStatus={garmentStatus} garmentDetails={garmentDetails} measurements={measurements} handleCustomerData ={handleCustomerData } toggleSection={toggleSection} /> 
                </ScrollView>
            )}
            {activeSection === 'billing' && (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <BillingDetails customerData={customerData} />
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10}}>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: '#F9F8FC'}]}
                            onPress={() => toggleSection('summary')}
                        >
                            <Text style={[styles.buttonText, { color: '#9999'}]}>back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: '#9579E3'}]}
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
    // backgroundColor: '#000000'
  },
  toggleButton: {
    padding: 5,
    paddingHorizontal: 50,
  },
  activeToggleButton: {
    borderBottomWidth: 1.5,
    borderColor: '#9579E3',
    TransitionEvent: .5,
  },
  heading: {
    color: '#999',
    fontSize: 14,
  },
  activeToggleButtonText: {
    color: "#9579E3",
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


export {Order};
