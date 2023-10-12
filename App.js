import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Provider } from 'react-redux';
import store from './store/Store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import CustomIcon from './components/CustomIcon';

import Onboarding from './screens/Onboarding';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Account from './screens/Account';
import Home from './screens/Home';
import UserProfile from './screens/UserProfile';
import Dashboard from './screens/Dashboard/Dashboard';
import Portfolio from './screens/Portfolio';
import Notifications from './screens/Notifications';
import Settings from './screens/Settings';
import Favourites from './screens/Favourites';
import DrawerNavigator from './components/DrawerNavigator';
import Search from './screens/Search';


const Stack = createNativeStackNavigator();

function App() {

  const[iconName, setIconName]= useState('heart-outline');

  const handleFavorites= () => {
    setIconName(iconName === 'heart'? 'heart-outline' : 'heart');
    // addToFavorites(id);
  } 
  
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="onBoarding" component={Onboarding} options={{headerShown: false}}/>
            <Stack.Screen name="Account" component={Account} options={{ title: 'account'}}/>
            <Stack.Screen name="Signup" component={Signup }  options={{ title: 'create account'}} />

            <Stack.Screen name="Login" component={Login}   options={{headerShown: false}} />
            <Stack.Screen name="Home" component={DrawerNavigator}    options={ {headerShown: false}}/>
            <Stack.Screen name="Search" component={Search}  options={{headerTitle: 'Stitch Connect',headerShadowVisible: false}}/>

            <Stack.Screen name="Profile" component={UserProfile}   />
            <Stack.Screen name="Dashboard" component={Dashboard}   options={{ headerShown: false}} />
            <Stack.Screen name="Portfolio" component={Portfolio} options={{ 
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 15 }}onPress={handleFavorites} >
                  <CustomIcon iconName={iconName} color="#755ED1" />
                </TouchableOpacity>
              )
              }} />
            <Stack.Screen name="Favourites" component={ Favourites } options={ {headerShown: false}} />
            <Stack.Screen name="Settings" component={ Settings } options={ {headerShown: false}} />
            <Stack.Screen name="Notifications" component={ Notifications } options={ {headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;