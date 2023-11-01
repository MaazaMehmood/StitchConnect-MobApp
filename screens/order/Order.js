import React, { useState } from 'react';
import { View,Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import {OrderSummary} from './order/OrderSummary';
import { BillingDetails } from './order/BillingDetails';


const { width, height } = Dimensions.get("screen");


function Order ({ navigation , route }) {

  const { garmentStatus, garmentDetails, measurements } = route.params;

  const [activeSection, setActiveSection] = useState('summary');

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
                    <OrderSummary  garmentStatus={garmentStatus} garmentDetails={garmentDetails} measurements={measurements}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10}}>
                        <TouchableOpacity
                            style={[styles.button, {marginLeft: '70%'}]}
                            onPress={() => toggleSection('billing')}
                        >
                            <Text style={styles.buttonText}>continue</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
            )}
            {activeSection === 'billing' && (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <BillingDetails />
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
    marginHorizontal: 40,
  },
  activeToggleButton: {
    borderBottomWidth: 1,
    borderColor: '#9579E3',
  },
  heading: {
    color: '#999',
    fontSize: 16,
  },
  activeToggleButtonText: {
    color: "#9579E3"
  },
  button: {
    padding: 8,
    backgroundColor: '#transparent',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'light',
    color: '#9579E3',
    fontSize: 16,
    letterSpacing: .5,
    textDecorationLine: 'underline'
  },
});


export {Order};
