import * as React from 'react';

import Order from '../views/Order';
import Profile from '../views/Profile';
import ProductStack from './ProductStack';
import IconWithBadge from '../components/IconWithBadge';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {PRIMARY_COLOR_TRANSPARENT, PRIMARY_COLOR} from 'react-native-dotenv';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Produtos':
              iconName = 'ios-home';
              break;
            case 'Pedidos':
              iconName = 'ios-cart';
              break;

            default:
              iconName = 'ios-person';

              break;
          }
          if (route.name === 'Pedidos') {
            // You can return any component that you like here!
            return <IconWithBadge name={iconName} size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: PRIMARY_COLOR,
        inactiveTintColor: PRIMARY_COLOR_TRANSPARENT,
      }}>
      <Tab.Screen name="Produtos" component={ProductStack} />
      <Tab.Screen name="Pedidos" component={Order} />
      <Tab.Screen name="Conta" component={Profile} />
    </Tab.Navigator>
  );
}
