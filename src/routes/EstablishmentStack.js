import React from 'react';

import Establishment from '../views/Establishment';
import EstablishmentView from '../views/EstablishmentView';
import EstablishmentInfo from '../views/EstablishmentInfo';
import EstablishmentProduct from '../views/EstablishmentProduct';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const EstablishmentStack = () => {
  return (
    <Stack.Navigator initialRouteName="Establishment" headerMode="none">
      <Stack.Screen name="Establishment" component={Establishment} />
      <Stack.Screen name="EstablishmentView" component={EstablishmentView} />
      <Stack.Screen name="EstablishmentInfo" component={EstablishmentInfo} />
      <Stack.Screen
        name="EstablishmentProduct"
        component={EstablishmentProduct}
      />
    </Stack.Navigator>
  );
};

export default EstablishmentStack;
