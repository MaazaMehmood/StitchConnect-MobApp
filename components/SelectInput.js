import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';



const SelectInput = ({ label, options }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    closeModal();
  };

  return (
    <View>
      <Text style={styles.label} >{label}</Text>
      <TouchableOpacity onPress={openModal}>
        <TextInput
          style={styles.input}
          placeholder="ladies"
          editable={false}
          value={selectedOption ? selectedOption.label : ''}
        />
      </TouchableOpacity>
      <Modal  transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleOptionSelect(item)}
              >
                <Text style={styles.text} >{item.label}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    letterSpacing: .5,
    fontSize: 16,
    margin: 5,
    color: '#424242',
    padding: 5,
    },
  modal: {
    // flex: 3,
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: '#A77BED',
    height: '30%',
    width: '80%',
    marginTop: '70%',
    marginLeft: '10%'
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#F1F0F0',
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
    color: '#ffff'
  },
  closeButton: {
    padding: 5,
    backgroundColor: '#fff',
  },
});

export default SelectInput;
