import * as React from 'react';
import {View, Text} from 'react-native';

import Login from '../views/Login';
import Home from '../views/Home';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  PRIMARY_COLOR_DARK_TRANSPARENT,
  PRIMARY_COLOR_DARK,
} from 'react-native-dotenv';

const Tab = createBottomTabNavigator();

function IconWithBadge({name, badgeCount, color, size}) {
  return (
    <View style={{width: 24, height: 24, margin: 5}}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}
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
            return (
              <IconWithBadge
                name={iconName}
                size={size}
                color={color}
                badgeCount={1}
              />
            );
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: PRIMARY_COLOR_DARK,
        inactiveTintColor: PRIMARY_COLOR_DARK_TRANSPARENT,
      }}>
      <Tab.Screen name="Produtos" component={Home} />
      <Tab.Screen name="Pedidos" component={Login} />
      <Tab.Screen name="Conta" component={Home} />
    </Tab.Navigator>
  );
}
