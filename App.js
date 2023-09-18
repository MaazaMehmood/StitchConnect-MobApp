import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/Onboarding';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Account from './screens/Account';
import Profiles from './screens/Profiles';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="onBoarding" component={Onboarding} options={{headerShown: false}}/>
        <Stack.Screen name="Account" component={Account} options={{ title: 'account'}}/>
        <Stack.Screen name="Signup" component={Signup }  options={{ title: 'create account'}} />
        <Stack.Screen name="Login" component={Login}   options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={Profiles}   options={{ title: 'profile'}} />
        <Stack.Screen name="Home" component={Home}   options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;