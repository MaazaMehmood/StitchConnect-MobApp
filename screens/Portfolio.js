import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { Divider } from 'react-native-paper';
import {CustomIcon} from '../components/CustomIcon';
import { connect } from 'react-redux';


const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;


function Portfolio  ({ navigation, user }) {

  const[icon, setIcon]= useState('heart-outline');

  const handleFavorites= () => {
    setIcon(icon === 'heart'? 'heart-outline' : 'heart');
    // addToFavorites(id);
  } 

  const handleBack = () => {
    navigation.navigate('Home');
  }

  const handleOrder = () => {
    navigation.navigate('Measurements')
  }
  
  return (
    <View style={styles.profile}>
      <View style={styles.profileContainer}>

        <ImageBackground
          source={require('../assets/images/bg.png')}
          style={styles.profileBackground}
        >

          <View style={{backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, padding: 20}}>
            <TouchableOpacity onPress={handleBack}>
                <CustomIcon iconName="arrow-back-outline" color="#ffff" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Portfolio</Text>
            <TouchableOpacity onPress={handleFavorites}>
                <CustomIcon iconName={user === 'customer' ? icon : '' } color="#ffff" />
            </TouchableOpacity>
          </View>
          
          <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.profileCard}>
              <View style={styles.avatarContainer}>
                <Image source={require('../assets/images/formaluser.png')} style={styles.avatar} />
              </View>
              <View style={styles.info}>
             
                <View style={{ marginTop: 20, paddingBottom: 24, flexDirection: 'row', justifyContent: 'center' }}>
                  <TouchableOpacity
                    style={[styles.button, { borderWidth: 1, borderColor: '#571DD2', backgroundColor: 'transparent' }]}
                    // onPress={}
                  >
                    <Text style={[styles.buttonText, { color: '#571DD2'}]}>Message</Text>
                  </TouchableOpacity>
                  
                  { user.userType === 'customer' && (
                    <TouchableOpacity
                      style={[styles.button, { backgroundColor: '#9579E3' }]}
                      onPress={handleOrder}
                    >
                      <Text style={styles.buttonText}>Order Here</Text>
                    </TouchableOpacity>
                   )}
                </View>
             
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: '500', fontSize: 18, marginBottom: 4, color: '#525F7F' }}>2<CustomIcon iconName="star" color='#525F7F' /></Text>
                    <Text style={{ fontSize: 12, color: 'grey' }}>Rating</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: '500', fontSize: 18, marginBottom: 4, color: '#525F7F' }}>10</Text>
                    <Text style={{ fontSize: 12, color: 'grey' }}>Photos</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: '500', fontSize: 18, marginBottom: 4, color: '#525F7F' }}>89</Text>
                    <Text style={{ fontSize: 12, color: 'grey' }}>Orders</Text>
                  </View>
                </View>
              </View>
              <View style={styles.nameInfo}>
                <Text style={{ fontWeight: 'medium', fontSize: 24, color: '#32325D' }}>Shah Jee, 27</Text>
                <Text style={{ fontSize: 16, color: '#32325D', marginTop: 10 }}>Gulshan e Iqbal, Karachi</Text>
              </View>
              <View style={{ marginTop: 20, marginBottom: 10 }}>
                <Divider />
              </View>
              <View style={{ margin: 8, marginBottom: 30}}>
                <Text style={{ fontSize: 14, color: '#525F7F', textAlign: "center", lineHeight: 20 }}>
                A designer of considerable range, whether it's crafting bespoke suits for gentlemen, designing elegant 
                dresses for ladies, or creating custom clothing for all occasions.
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
                <Text style={{ fontWeight: '500', fontSize: 16, color: '#525F7F' }}>Gallery</Text>
                { user.userType === "business" && (
                  <TouchableOpacity 
                  // onPress={}
                  >
                    <Text style={{ color: "#5E72E4", fontSize: 14, marginLeft: 20 }}>Upload Photos</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View style={{ paddingBottom: 20, margin: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  {/* {Images.Viewed.map((img, imgIndex) => ( */}
                    <Image
                      source={require('../assets/images/style(1).jpg')}
                      // key={`viewed-${img}`}
                      resizeMode="cover"
                      style={styles.thumb}
                    />
                    <Image
                      source={require('../assets/images/style(1).jpg')}
                      // key={`viewed-${img}`}
                      resizeMode="cover"
                      style={styles.thumb}
                    />
                    <Image
                      source={require('../assets/images/style(1).jpg')}
                      // key={`viewed-${img}`}
                      resizeMode="cover"
                      style={styles.thumb}
                    />
                    <Image
                      source={require('../assets/images/style(1).jpg')}
                      // key={`viewed-${img}`}
                      resizeMode="cover"
                      style={styles.thumb}
                    />
                    <Image
                      source={require('../assets/images/style(1).jpg')}
                      // key={`viewed-${img}`}
                      resizeMode="cover"
                      style={styles.thumb}
                    />
                    <Image
                      source={require('../assets/images/style(1).jpg')}
                      // key={`viewed-${img}`}
                      resizeMode="cover"
                      style={styles.thumb}
                    />
                    <Image
                      source={require('../assets/images/style(1).jpg')}
                      // key={`viewed-${img}`}
                      resizeMode="cover"
                      style={styles.thumb}
                    />

                  {/* ))} */}
                </View>
              </View>
            </View>

          </ScrollView>
        </ImageBackground>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
  },
  profileContainer: {
    width: width,
    height: height,
    zIndex: 1
  },
  profileBackground: {
    marginBottom: 40,
    width: width,
    // height: height
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ffff'
  },
  profileCard: {
    position: "relative",
    padding: 10,
    marginBottom: 80,
    marginTop: '20%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: "#ffff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80,
    marginHorizontal: '30%'
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  info: {
    paddingHorizontal: 40
  },
  button: {
    width: 110,
    padding: 10,
    paddingHorizontal: 13,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '500',
    color: '#ffff',
    fontSize: 16,
    letterSpacing: .5
  },
  nameInfo: {
    alignItems: 'center',
    marginTop: 35
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

const mapStateToProps = (state) => ({
  user: state.user.user,
});


export default connect(mapStateToProps)(Portfolio);
