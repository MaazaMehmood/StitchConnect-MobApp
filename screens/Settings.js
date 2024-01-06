import React from 'react';
import { View, Text, TouchableOpacity, Switch, ScrollView, StyleSheet } from 'react-native';
import {CustomIcon} from '../components/CustomIcon';


function Settings ({ navigation }) {

  const handleNotificationToggle = (value) => {
    //notification toggle logic here
  };

  const handleProfileEditing = () => {
    navigation.navigate('Profile')
  };

  return (
    <View style={styles.container}>
      <ScrollView>

        <Text style={styles.heading}>Notifications Settings</Text>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Receive Notifications</Text>
          <Switch
            value={true} // Set the initial value based on user preference
            onValueChange={handleNotificationToggle}
            trackColor={{
              false: '#767577', // Color when switch is off
              true: '#C5B8E7',  // Color when switch is on
            }}
            thumbColor={'#9579E3'}
          />
        </TouchableOpacity>

        <Text style={styles.heading}>Payment Settings</Text>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Manage Payments Options</Text>
          <CustomIcon  iconName='chevron-forward-outline' color='#999' />
        </TouchableOpacity>

        <Text style={styles.heading}>Profile Settings</Text>

        <TouchableOpacity style={styles.option}   onPress={ handleProfileEditing }>
          <Text style={styles.optionText}>Edit Profile</Text>
          <CustomIcon  iconName='chevron-forward-outline' color='#999' />
        </TouchableOpacity>

        <Text style={styles.heading}>Privacy Settings</Text>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>User Agreement</Text>
          <CustomIcon  iconName='chevron-forward-outline' color='#999' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Privacy</Text>
          <CustomIcon  iconName='chevron-forward-outline' color='#999' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>About </Text>
          <CustomIcon  iconName='chevron-forward-outline' color='#999' />
        </TouchableOpacity>

        <Text style={styles.heading}>Account</Text>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Delete Account</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: '#FCFAFA',
  },
  heading: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    marginVertical: 15,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    fontSize: 14,
    color: '#444',
  },
});


export {Settings};
