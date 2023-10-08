import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

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


const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="onBoarding" component={Onboarding} options={{headerShown: false}}/>
          <Stack.Screen name="Account" component={Account} options={{ title: 'account'}}/>
          <Stack.Screen name="Signup" component={Signup }  options={{ title: 'create account'}} />

          <Stack.Screen name="Login" component={Login}   options={{headerShown: false}} />
          <Stack.Screen name="Home" component={DrawerNavigator}    options={ {headerShown: false}}/>

          <Stack.Screen name="Profile" component={UserProfile}   />
          <Stack.Screen name="Dashboard" component={Dashboard}   options={{ headerShown: false}} />
          <Stack.Screen name="Portfolio" component={Portfolio}   options={{ headerShown: false}} />
          <Stack.Screen name="Favourites" component={ Favourites } options={ {headerShown: false}} />
          <Stack.Screen name="Settings" component={ Settings } options={ {headerShown: false}} />
          <Stack.Screen name="Notifications" component={ Notifications } options={ {headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
export default App;