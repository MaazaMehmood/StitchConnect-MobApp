import { createDrawerNavigator } from '@react-navigation/drawer';
import {  TouchableOpacity } from 'react-native';

import CustomIcon from './CustomIcon';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { logout } from '../store/userActions';

import Login from '../screens/Login';
import Home from '../screens/Home';
import UserProfile from '../screens/UserProfile';
import Portfolio from '../screens/Portfolio';
import Settings from '../screens/Settings';
import Favourites from '../screens/Favourites';
import Dashboard from '../screens/Dashboard/Dashboard';



const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation, user, logout}) => {

  const handleNotifications = () => {
    navigation.navigate('Notifications')
  }


    return (
      <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={{
          drawerActiveTintColor: '#ffff', // color of the active component
          drawerActiveBackgroundColor: '#9579E3',
          drawerInactiveTintColor: 'gray', // color of inactive components
          drawerLabelStyle: {
            fontSize: 16,
          },
          drawerStyle: {
            paddingTop: 30,
            padding: 5
          } 
        }}
      >
        <Drawer.Screen name="Home" component={Home} 
          options={( ) => ({
            headerTitle: 'Stitch Connect',
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }} onPress={handleNotifications}>
                <CustomIcon iconName="notifications-outline" color="#755ED1" />
              </TouchableOpacity>
            ),
            drawerIcon: ({ focused }) =>  {
              const activeColor = focused ? 'white' : 'indigo';
              return <CustomIcon iconName="home-outline" color={activeColor} />}
            })}
        />
        <Drawer.Screen name="Profile" component={UserProfile}  
          options={{ drawerIcon: ({ focused }) => {
            const activeColor = focused ? 'white' : 'brown';
            return <CustomIcon iconName="person-outline"  color={activeColor} />
          }}}
        />
        { user.userType === "business" && (
          <>
            <Drawer.Screen name="Dashboard" component={Dashboard} 
              options={{ drawerIcon: ({ focused }) => {
                const activeColor = focused ? 'white' : '#2ecc71';
                return <MaterialCommunityIcons name="view-dashboard-outline" size={22} color={activeColor} />
              },
              headerShown: false
            }} 
            />
            <Drawer.Screen name="Portfolio" component={Portfolio} 
              options={() => ({
              drawerIcon: ({ focused }) => {
                const activeColor = focused ? 'white' : '#22CCDD';
                return <AntDesign name="profile" size={23} color={activeColor} />}
              })}
            />
          </>
        )}
        <Drawer.Screen name="Favourites" component={Favourites} 
          options={{
            drawerIcon: ({ focused }) => {
            const activeColor = focused ? 'white' : 'navy';
            return <CustomIcon iconName="heart-outline" color={activeColor} />
          }}} 
        />
        <Drawer.Screen name="Settings" component={Settings} 
          options={{ drawerIcon: ({ focused }) => {
            const activeColor = focused ? 'white' : '#3498db';
            return <CustomIcon iconName="settings-outline" color={activeColor} />
          }}} 
        />
        <Drawer.Screen name="Logout" component={Login} onPress={logout}
          options={{ drawerIcon: ({ focused }) => {
            const activeColor = focused ? 'white' : '#e74c3c';
            return <AntDesign name="logout" size={23} color={activeColor} />
          },
          headerShown:false}} 
        />
      </Drawer.Navigator>
    );
};


const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, { logout })(DrawerNavigator);