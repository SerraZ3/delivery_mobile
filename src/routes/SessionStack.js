import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Login from '../views/Login';
import ClientTab from './ClientTab';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import api from '../services/api';

const Stack = createStackNavigator();

const SessionStack = () => {
  const token = useSelector((state) => state.user.auth.token);
  const dispatch = useDispatch();

  function addUser(user) {
    dispatch({type: 'ADD_USER', user});
  }
  useEffect(() => {
    const isAuthenticated = async () => {
      try {
        let user = (await api.get('/client/user/', {})).data;
        addUser({
          ...user.person,
          email: user.email,
          roles: user.roles,
          permission: user.permission,
          id: user.id,
        });
      } catch (error) {}
    };
    if (token) isAuthenticated();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {token ? (
          <Stack.Screen name="ClientTab" component={ClientTab} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SessionStack;
