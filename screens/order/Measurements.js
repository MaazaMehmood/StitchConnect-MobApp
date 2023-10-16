import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';


function  Measurements ({ navigation }) {

  const garmentTypes = ['Shirt', 'Pants', 'Dress', 'Trouser', 'wedding','festives', 'other'];


  const [garmentStatus, setGarmentStatus] = useState({});
  const [garmentDetails, setGarmentDetails] = useState({});

  const handleStatusChange = (garmentType) => {
    setGarmentStatus({
      ...garmentStatus,
      [garmentType]: !garmentStatus[garmentType],
    });
  };

  const handleDetailsChange = (garmentType, details) => {
    setGarmentDetails({
      ...garmentDetails,
      [garmentType]: details,
    });
  };

  const [length, setLength] = useState('');
  const [neck, setNeck] = useState('');
  const [shoulders, setShoulders] = useState('');
  const [chest, setChest] = useState('');
  const [waist, setWaist] = useState('');
  const [sleeves, setSleeves] = useState('');
  const [trouser, setTrouser] = useState('');
  const [other, setOther] = useState('');

  const handleOrderSummary = () => {
    navigation.navigate('Order Summary', {
      garmentStatus,
      garmentDetails,
      measurements: {
        length,
        neck,
        shoulders,
        chest,
        waist,
        sleeves,
        trouser,
        other,
      },
    });
    
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'column', justifyContent: 'space-around', margin: 15 }}>
        <Text style={styles.heading}>Shah jee</Text>
        <Text>abc area block 12, Karachi</Text>
      </View>
      
      <View  style={ styles.section }>
       <Text style={{  fontSize: 16, fontWeight: 500, marginVertical: 15 }}>Select garment type</Text>
        {garmentTypes.map((garmentType, index) => (
          <View key={index}>
            <Checkbox.Item
              label={garmentType}
              status={garmentStatus[garmentType] ? 'checked' : 'unchecked'}
              onPress={() => handleStatusChange(garmentType)}
            />
            {garmentStatus[garmentType] && (
              <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={6}
                textAlignVertical="top" 
                textAlign="left"
                placeholder="details"
                value={garmentDetails[garmentType] || ''}
                onChangeText={(text) => handleDetailsChange(garmentType, text)}
              />
            )}
          </View>
          ))}
      </View>
      
      <View  style={ styles.section }>
        <Text style={{  fontSize: 16, fontWeight: 500, marginVertical: 15 }}>Measurements</Text>
        <TextInput
          style={styles.scale}
          label="length"
          onChangeText={text => setLength(text)}
          underlineColor='#9999'
          activeUnderlineColor='#9579E3'
        />
        <TextInput
          style={styles.scale}
          label="neck"
          onChangeText={text => setNeck(text)}
          underlineColor='#9999'
          activeUnderlineColor='#9579E3'
        />
        <TextInput
          style={styles.scale}
          label="shoulders"
          onChangeText={text => setShoulders(text)}
          underlineColor='#9999'
          activeUnderlineColor='#9579E3'
        />
        <TextInput
          style={styles.scale}
          label="chest"
          onChangeText={text =>setChest(text) }
          underlineColor='#9999'
          activeUnderlineColor='#9579E3'
        />
        <TextInput
          style={styles.scale}
          label="waist"
          onChangeText={text => setWaist(text)}
          underlineColor='#9999'
          activeUnderlineColor='#9579E3'
        />
        <TextInput
          style={styles.scale}
          label="sleeves length"
          onChangeText={text => setSleeves(text)}
          underlineColor='#9999'
          activeUnderlineColor='#9579E3'
        />
        <TextInput
          style={styles.scale}
          label="trouser length"
          onChangeText={text => setTrouser(text)}
          underlineColor='#9999'
          activeUnderlineColor='#9579E3'
        />
        <TextInput
          style={styles.scale}
          label="other"
          onChangeText={text => setOther(text)}
          underlineColor='#9999'
          activeUnderlineColor='#9579E3'
        />
      </View>

      { Object.values(garmentStatus).includes(true) ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleOrderSummary}
          >
            <Text style={styles.buttonText}>continue</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#E0DEDE'}]}
          >
            <Text style={styles.buttonText}>continue</Text>
          </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FCFAFA',
  },
  heading: {
    fontSize: 24,
    fontWeight: '500',
  },
  input: {
    alignItems: 'left',
    color: '#777',
    fontSize:  14,
    overflowX: 'scroll',
  },
  scale: {
    alignItems: 'left',
    borderWidth: 1,
    borderColor: '#E7E0FA',
    color: '#777',
    backgroundColor: 'transparent',
    fontSize:  14,
    margin: 5
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 2,
    width: '100%',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
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

export default Measurements;
