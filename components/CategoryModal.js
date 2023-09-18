import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';



const CategoryModal = () => {

    const categories = [
        'Shirts',
        'Trousers/Pants',
        'Suits',
        'Kurtas',
        'casual',
        'Party',
        'Wedding',
        'Festive',
        'Embroidery',
        'Fabric Sales and Supplies',
    ];

    const [category, setCategory] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                <FlatList
                    data={categories}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                        setSelectedCategory(item);
                        setModalVisible(false);
                        }}
                    >
                        <Text style={styles.categoryItem}>{item}</Text>
                    </TouchableOpacity>
                    )}
                />
                </View>
            </Modal>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Select a category"
                    value={category}
                    onFocus={() => setModalVisible(true)}
                />

                <TouchableOpacity
                style={styles.selectButton}
                onPress={() => setModalVisible(true)}
                >
                  <Text>Select</Text>
                </TouchableOpacity>

                <Text>Selected Category: {selectedCategory}</Text>
                <CategoryModal />
            </View>
      </>
    );
  };
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    selectButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#8E64D3',
        borderRadius: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    categoryItem: {
        padding: 10,
        fontSize: 18,
    },
});

export default CategoryModal;
  