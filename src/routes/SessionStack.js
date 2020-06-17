import React from 'react';

import Login from '../views/Login';
import ClientTab from './ClientTab';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const SessionStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="ClientTab" component={ClientTab} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SessionStack;
