import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import {CustomIcon} from '../../components/CustomIcon';
import {OrderSummary} from './views/OrderSummary';
import {Progress} from './views/Progress';
import {OrderDetails} from './views/OrderDetails';


const { width, height } = Dimensions.get("screen");


function Dashboard ({ navigation, user }) {

  const [activeSection, setActiveSection] = useState('summary');

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  const handleBack = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>

      {/* Header */}
      <ImageBackground 
        source={require('../../assets/images/bg.png')}
        style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20}}>
          <TouchableOpacity onPress={handleBack}>
              <CustomIcon iconName="arrow-back-outline" color="#ffff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Dashboard</Text>
          <TouchableOpacity>
              <CustomIcon iconName="notifications-outline" color="#ffff" />
          </TouchableOpacity>
        </View>
        
        <View style={{ width: '95%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'center', marginTop: 5}}>
          <Text style={styles.userName}>{user.name}</Text>
        </View>
      </ImageBackground>


      {/* Toggle Buttons */}
      <View style={styles.toggleButtons}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeSection === 'summary' && styles.activeToggleButton,
          ]}
          onPress={() => toggleSection('summary')}
        >
          <Text style={[styles.toggleButtonText, activeSection === 'summary' && styles.activeToggleButtonText]}>Summary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeSection === 'progress' && styles.activeToggleButton,
          ]}
          onPress={() => toggleSection('progress')}
        >
          <Text style={[styles.toggleButtonText, activeSection === 'progress' && styles.activeToggleButtonText]}>Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeSection === 'details' && styles.activeToggleButton,
          ]}
          onPress={() => toggleSection('details')}
        >
          <Text style={[styles.toggleButtonText, activeSection === 'details' && styles.activeToggleButtonText]}>Details</Text>
        </TouchableOpacity>
      </View>


      {/* Content Based on Toggle */}
      {activeSection === 'summary' && (
        <View style={styles.content}>
          <OrderSummary/>
        </View>
      )}
      {activeSection === 'progress' && (
        <View style={styles.content}>
          <Progress/>
        </View>
      )}
      {activeSection === 'details' && (
        <View style={styles.content}>
          <OrderDetails/>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff'
  },
  header: {
    width: width,
    height: height / 4.5,
    flexDirection: 'col',
    justifyContent: 'center',
    alignItems: 'left',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffff'
  },
  userName: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 5,
    color: '#ffffff'
  },
  toggleButtons: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 2,
    marginHorizontal: 20,
    top: '-10%'
  },
  toggleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 3,
  },
  activeToggleButton: {
    borderRadius: 10,
    backgroundColor: '#9579E3',
  },
  toggleButtonText: {
    fontSize: 15,
    color: '#777'
  },
  activeToggleButtonText: {
    color: "#ffff"
  },
  content: {
    flex: 1,
    width: width,
    margin: 1,
  },
});

const mapStateToProps = (state) => ({
  user: state.user.user,
});


export default connect(mapStateToProps)(Dashboard);
