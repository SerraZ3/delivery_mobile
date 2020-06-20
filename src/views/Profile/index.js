import React from 'react';
// Redux
import {useSelector, useDispatch} from 'react-redux';
// React-native components
import {View} from 'react-native';
// React-native-elements
import {ListItem, Text, Icon} from 'react-native-elements';
// Styles
import {Container} from './styles';
// Informação do Estabelecimento
import Establishment from './Establishment';
// Informação do usuário
import Account from './Account';

import {PRIMARY_COLOR} from 'react-native-dotenv';

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  function logout() {
    dispatch({type: 'LOGOUT'});
  }
  return (
    <Container>
      <Establishment></Establishment>
      <Account></Account>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 10,
        }}></View>
      <ListItem
        containerStyle={{}}
        rightIcon={
          <Icon
            type="material"
            name="power-settings-new"
            size={30}
            color={PRIMARY_COLOR}
          />
        }
        title={'Sair/Deslogar'}
        titleStyle={{textAlign: 'right'}}
        bottomDivider
        onPress={() => logout()}
      />
    </Container>
  );
};

export default Profile;
