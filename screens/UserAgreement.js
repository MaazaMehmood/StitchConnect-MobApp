import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';



function UserAgreement () {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Agreement</Text>
      <View style={styles.content}>
        <Text style={styles.text}>
          Please read and agree to the terms and conditions
        </Text>
        <Text style={styles.terms}>Welcome to Stitch Connect!{'\n'}
         By using this application, you agree to be bound by the following terms and conditions. 
         Please read these terms carefully before accessing or using our services. 
         If you do not agree with any part of these terms, you may not use our app.
        </Text>
        <Text style={styles.terms}>Use of Services{'\n'}
            Our Tailoring App provides a platform for users to browse, select, and order 
            tailored garments from skilled tailors. Users can view designs, place orders,
            track their orders, and interact with tailors through this application. 
            Users must be at least 18 years old to use our services. By using our app,
            you agree to provide accurate and complete information and ensure the security
            of your account credentials. You are responsible for maintaining the confidentiality of your account
            and agree to notify us immediately of any unauthorized use or security breach. We reserve the right
            to terminate or suspend accounts violating our terms and conditions.
        </Text>
        <Checkbox.Item
          label="I agree to the terms and conditions"
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={handleCheck}
          style={{marginVertical: 50}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#9579E3',
  },
  terms: {
    fontSize: 14,
    marginVertical: 15,
  },
  button: {
    marginTop: 30,
  },
});

export  {UserAgreement};
