import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {  TouchableOpacity } from 'react-native';
import CustomIcon from './components/CustomIcon';
import { AntDesign } from '@expo/vector-icons';

import Onboarding from './screens/Onboarding';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Account from './screens/Account';
import Home from './screens/Home';
import UserProfile from './screens/UserProfile';
import Notifications from './screens/Notifications';
import Settings from './screens/settings';
import Orders from './screens/Orders';
import Portfolio from './screens/Portfolio';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor: '#ffff', // color of the active component
        drawerActiveBackgroundColor: '#755ED1',
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
        options={({ navigation }) => ({
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 15 }} >
            <CustomIcon iconName="heart-outline" color="#755ED1" />
          </TouchableOpacity>
        ),
        drawerIcon: ({ focused }) =>  {
          const activeColor = focused ? 'white' : 'indigo';
          return <CustomIcon iconName="home-outline" color={activeColor} />}
        })}
      />
      <Drawer.Screen name="Profile" component={UserProfile}  
        options={{ drawerIcon: ({ focused }) => {
          const activeColor = focused ? 'white' : '#2ecc71';
          return <CustomIcon iconName="person-outline"  color={activeColor} />
        }}}
      />
      <Drawer.Screen name="Order" component={Orders} 
        options={{ drawerIcon: ({ focused }) => {
          const activeColor = focused ? 'white' : 'brown';
          return <CustomIcon iconName="cart-outline" color={activeColor} />
        }}} 
      />
      <Drawer.Screen name="Portfolio" component={Portfolio} 
        options={{ drawerIcon: ({ focused }) => {
          const activeColor = focused ? 'white' : '#22CCDD';
          return <AntDesign name="profile" size={23} color={activeColor} />
        }}} 
      />
      <Drawer.Screen name="Notifications" component={Notifications} 
        options={{ drawerIcon: ({ focused }) => {
          const activeColor = focused ? 'white' : '#3498db';
          return <CustomIcon iconName="notifications-outline" color={activeColor} />
        }}} 
      />
      <Drawer.Screen name="Settings" component={Settings} 
        options={{ drawerIcon: ({ focused }) => {
          const activeColor = focused ? 'white' : 'navy';
          return <CustomIcon iconName="settings-outline" color={activeColor} />
        }}} 
      />
      <Drawer.Screen name="Logout" component={Login} 
        options={{ drawerIcon: ({ focused }) => {
          const activeColor = focused ? 'white' : '#e74c3c';
          return <AntDesign name="logout" size={23} color={activeColor} />
        },
        headerShown:false}} 
      />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="onBoarding" component={Onboarding} options={{headerShown: false}}/>
        <Stack.Screen name="Account" component={Account} options={{ title: 'account'}}/>
        <Stack.Screen name="Signup" component={Signup }  options={{ title: 'create account'}} />

        <Stack.Screen name="Login" component={Login}   options={{headerShown: false}} />
        <Stack.Screen name="Home" component={DrawerNavigator}    options={ {headerShown: false}}/>
        <Stack.Screen name="Profile" component={UserProfile}   options={{ headerShown: false}} />
        <Stack.Screen name="Orders" component={Orders}   options={{ headerShown: false}} />
        <Stack.Screen name="Portfolio" component={Portfolio}   options={{ headerShown: false}} />
        <Stack.Screen name="Notifications" component={ Notifications } options={ {headerShown: false}} />
        <Stack.Screen name="Settings" component={ Settings } options={ {headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;