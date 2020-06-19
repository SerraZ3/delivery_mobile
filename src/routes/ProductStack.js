import React from 'react';

import Home from '../views/Home';
import Product from '../views/Product';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const SessionStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default SessionStack;
