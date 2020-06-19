import React, {useEffect} from 'react';
// React-native components
import {View} from 'react-native';
// React redux
import {useSelector, useDispatch} from 'react-redux';
// React-native-elements
import {ListItem, Text, Icon} from 'react-native-elements';
// Styles
import {AccountContainer} from './styles';
// dotenv
import {PRIMARY_COLOR_DARK} from 'react-native-dotenv';

import api from '../../services/api';

const Account = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  function addUser(user) {
    dispatch({type: 'ADD_USER', user});
  }

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.post('/client/user/', {email, password});
        let user = (await api.get('/client/user/', {})).data;
        addUser({
          ...user.person,
          email: user.email,
          roles: user.roles,
          permission: user.permission,
          id: user.id,
        });
      } catch (error) {
        setLoading(false);
        alert('Email ou senha inválido');
      }
      setSubmit(false);
    };
    if (!user.name) {
      getUser();
    }
  }, [user]);

  return (
    <AccountContainer>
      <View style={{alignItems: 'center', marginTop: 20, marginBottom: 10}}>
        <Text h4>Conta</Text>
      </View>
      <ListItem
        leftIcon={
          <Icon
            type="material"
            name="person"
            size={40}
            color={PRIMARY_COLOR_DARK}
          />
        }
        title={user.name ? user.name : 'Nome não encontrado'}
        subtitle={user.email}
        bottomDivider
      />
      <ListItem
        leftIcon={
          <Icon
            type="material"
            name="date-range"
            size={40}
            color={PRIMARY_COLOR_DARK}
          />
        }
        title={
          user.date_birth
            ? user.date_birth
            : 'Data de aniversário não registrado'
        }
        bottomDivider
      />
      <ListItem
        leftIcon={
          <Icon
            type="material"
            name="person-pin-circle"
            size={40}
            color={PRIMARY_COLOR_DARK}
          />
        }
        title={user.address ? user.address : 'Endereço não registrado'}
        subtitle={user.address}
        bottomDivider
      />
    </AccountContainer>
  );
};

export default Account;
