import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { Provider } from 'react-redux';
import {store} from './store/Store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

import {Onboarding} from './screens/Onboarding';
import {Signup} from './screens/Signup';
import Login from './screens/Login';
import {Account} from './screens/Account';
import {Home} from './screens/Home';
import UserProfile from './screens/UserProfile';
import {Dashboard} from './screens/Dashboard/Dashboard';
import Portfolio from './screens/Portfolio';
import {Settings} from './screens/Settings';
import { About } from './screens/About';
import { UserAgreement } from './screens/UserAgreement';
import {Favorites} from './screens/Favorites';
import DrawerNavigator from './components/DrawerNavigator';
import {Search} from './screens/Search';
import {Measurements} from './screens/order/Measurements';
import {Order} from './screens/order/Order';
import { TailorNotification } from './screens/notifications/TailorNotification';
import { CustomerNotification } from './screens/notifications/CustomerNotification';



const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="onBoarding" component={ Onboarding } options={{headerShown: false}}/>
            <Stack.Screen name="Account" component={ Account } options={{ title: 'account'}}/>
            <Stack.Screen name="Signup" component={ Signup }  options={{ title: 'create account'}} />

            <Stack.Screen name="Login" component={ Login}   options={{headerShown: false}} />
            <Stack.Screen name="Home" component={ DrawerNavigator }   options={ {headerShown: false}}/>
            <Stack.Screen name="Search" component={ Search }  options={{headerTitle: 'Stitch Connect' , headerShadowVisible: false}}/>

            <Stack.Screen name="Profile" component={ UserProfile }   />
            <Stack.Screen name="Dashboard" component={ DrawerNavigator }   options={{ headerShown: false}} />
            <Stack.Screen name="Portfolio" component={ Portfolio } options={{ headerShown: false}}/>
            <Stack.Screen name="Measurements" component={ Measurements } />
            <Stack.Screen name="Order" component={ Order }  options={{ headerShadowVisible: false, headerTitle: 'My Order'}} />
            <Stack.Screen name="Favorites" component={ Favorites } options={{headerShown: false}} />
            
            <Stack.Screen name="Settings" component={ Settings } options={{headerShown: false}} />
            <Stack.Screen name="About" component={ About } />
            <Stack.Screen name="Agreement" component={ UserAgreement } />
            
            <Stack.Screen name="Business Notifications" component={ TailorNotification } options={{headerShown: false}} />
            <Stack.Screen name="Notifications" component={ CustomerNotification } />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;