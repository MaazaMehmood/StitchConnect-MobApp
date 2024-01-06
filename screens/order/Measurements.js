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
    navigation.navigate('Order',
     {
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
    }
    );
    
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'column', justifyContent: 'space-around', margin: 10 }}>
        <Text style={styles.heading}>Shah jee</Text>
        <Text style={{ color: '#777'}}>abc area block 12, Karachi</Text>
      </View>
      
      <View  style={ styles.section }>
       <Text style={{  fontSize: 15, fontWeight: '500', marginVertical: 15 }}>Ladies</Text>
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
        <Text style={{  fontSize: 15, fontWeight: '500', marginVertical: 15 }}>Measurements</Text>
        <TextInput
          style={styles.scale}
          label="length"
          onChangeText={text => setLength(text)}
          underlineColor='#9999'
          activeUnderlineColor='#B7A8DF'
        />
        <TextInput
          style={styles.scale}
          label="neck"
          onChangeText={text => setNeck(text)}
          underlineColor='#9999'
          activeUnderlineColor='#B7A8DF'
        />
        <TextInput
          style={styles.scale}
          label="shoulders"
          onChangeText={text => setShoulders(text)}
          underlineColor='#9999'
          activeUnderlineColor='#B7A8DF'
        />
        <TextInput
          style={styles.scale}
          label="chest"
          onChangeText={text =>setChest(text) }
          underlineColor='#9999'
          activeUnderlineColor='#B7A8DF'
        />
        <TextInput
          style={styles.scale}
          label="waist"
          onChangeText={text => setWaist(text)}
          underlineColor='#9999'
          activeUnderlineColor='#B7A8DF'
        />
        <TextInput
          style={styles.scale}
          label="sleeves length"
          onChangeText={text => setSleeves(text)}
          underlineColor='#9999'
          activeUnderlineColor='#B7A8DF'
        />
        <TextInput
          style={styles.scale}
          label="trouser length"
          onChangeText={text => setTrouser(text)}
          underlineColor='#9999'
          activeUnderlineColor='#B7A8DF'
        />
        <TextInput
          style={styles.scale}
          label="other"
          onChangeText={text => setOther(text)}
          underlineColor='#9999'
          activeUnderlineColor='#B7A8DF'
        />

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
          )
        }
      </View>
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
    marginBottom: 3,
    padding: 3,
    color: '#777',
    backgroundColor: 'transparent',
    fontSize:  14,
    overflowX: 'scroll'
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 8,
    marginTop: 3,
    width: '100%',
    shadowColor: '#9999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  button: {
    padding: 15,
    paddingRight: 45,
    paddingLeft: 45,
    borderRadius: 10,
    backgroundColor: '#9579E3',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '500',
    color: '#ffffff',
    fontSize: 16,
  }
});


export {Measurements};
