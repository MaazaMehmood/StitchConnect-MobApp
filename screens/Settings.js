import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomIcon from '../components/CustomIcon';



function Settings () {

  const handleNotificationToggle = (value) => {
    //notification toggle logic here
  };

  const handleDarkModeToggle = (value) => {
    // dark mode toggle logic here
  };

  return (
    <View style={styles.container}>
      <ScrollView>

        <Text style={styles.heading}>Settings</Text>
        
        <View style={styles.option}>
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
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Dark Mode</Text>
          <Switch
            value={false} // Set the initial value based on user preference
            onValueChange={handleDarkModeToggle}
            trackColor={{
              false: '#767577', // Color when switch is off
              true: '#81b0ff',  // Color when switch is on
            }}
            // thumbColor={isEnabled ? '#9579E3' : '#f4f3f4'}
          />
        </View>

        <Text style={styles.heading}>Payment Settings</Text>

        <View style={styles.option}>
          <Text style={styles.optionText}>Manage Payments Options</Text>
          <Switch
            value={true} // Set the initial value based on user preference
            onValueChange={handleNotificationToggle}
            trackColor={{
              false: '#767577', // Color when switch is off
              true: '#C5B8E7',  // Color when switch is on
            }}
            thumbColor={'#9579E3'}
          />
        </View>

        <Text style={styles.heading}>Privacy Settings</Text>

        <View style={styles.option}>
          <Text style={styles.optionText}>User Agreement</Text>
          <CustomIcon  iconName='arrow-forward-outline' color='#444' />
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Privacy</Text>
          <CustomIcon  iconName='arrow-forward-outline' color='#444' />
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>About </Text>
          <CustomIcon  iconName='arrow-forward-outline' color='#444' />
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionText: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Settings;
