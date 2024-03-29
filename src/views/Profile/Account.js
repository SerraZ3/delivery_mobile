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
import {
  PRIMARY_COLOR,
  DELIVERY_ADDRESS,
  DELIVERY_NEIGHTBORHOOD,
  DELIVERY_CITY,
} from 'react-native-dotenv';

import getuser from '../../services/getuser';

const Account = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  function addUser(user) {
    dispatch({type: 'ADD_USER', user});
  }

  useEffect(() => {
    const getUser = async () => {
      try {
        let user = await getuser();
        addUser({
          ...user.person,
          email: user.email,
          roles: user.roles,
          permission: user.permission,
          id: user.id,
        });
      } catch (error) {}
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
          <Icon type="material" name="person" size={40} color={PRIMARY_COLOR} />
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
            color={PRIMARY_COLOR}
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
            color={PRIMARY_COLOR}
          />
        }
        title={user.address ? user.address : 'Endereço não registrado'}
        // subtitle={user.address}
        bottomDivider
      />
    </AccountContainer>
  );
};

export default Account;
