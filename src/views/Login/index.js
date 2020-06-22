import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Button, Text, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ViewButtonLogin} from './styles';

import {Gradient, InputRound} from '../../styles';

import {useDispatch} from 'react-redux';

import {
  DELIVERY_NAME,
  PRIMARY_COLOR_LIGHT,
  PRIMARY_COLOR,
  DELIVERY_NAME_IMAGE,
} from 'react-native-dotenv';

import login from '../../services/login';

import {CommonActions} from '@react-navigation/native';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState('cab@gmail.com');
  const [password, setPassword] = useState('henrique123');

  const dispatch = useDispatch();

  function addAuth(refresh_token, token, type) {
    dispatch({type: 'ADD_AUTH', auth: {refresh_token, token, type}});
  }
  useEffect(() => {
    let mounted = true;
    const handleSubmit = async () => {
      try {
        if (mounted) {
          setLoading(true);
          const response = await login(email, password);

          let data = response.data;
          addAuth(data.refreshToken, data.token, data.type);
          setLoading(false);
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'ClientTab'}],
            }),
          );
        }
      } catch (error) {
        if (mounted) {
          setLoading(false);
          console.log(error);
          alert('Email ou senha inválido');
        }
      }
      if (mounted) setSubmit(false);
    };
    if (submit === true) handleSubmit();
    return () => (mounted = false);
  }, [submit]);

  return (
    <Gradient
      color={[PRIMARY_COLOR_LIGHT, PRIMARY_COLOR]}
      style={{justifyContent: 'center'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Avatar
          size="xlarge"
          rounded
          containerStyle={{marginVertical: 20}}
          source={require(`../../${DELIVERY_NAME_IMAGE}`)}
        />
        <Text
          h3
          style={{
            color: 'white',
          }}>
          {DELIVERY_NAME}
        </Text>
      </View>
      <View style={{flex: 1, marginHorizontal: 30}}>
        <InputRound
          placeholder={'E-mail'}
          keyboard={true}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <InputRound
          placeholder={'Senha'}
          secureTextEntry={true}
          keyboard={true}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <ViewButtonLogin>
          <Text
            style={{
              fontSize: 20,
              marginRight: 10,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Login
          </Text>
          <Button
            buttonStyle={{backgroundColor: 'white'}}
            onPress={() => setSubmit(true)}
            icon={<Icon name="arrow-right" size={11} color="#1A4B71" />}
            containerStyle={{
              width: 55,
              maxHeight: 30,
              borderRadius: 10,
              fontSize: 10,
              marginVertical: 15,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            type="outline"
            iconRight
            loading={loading}
            loadingProps={{size: 10}}
          />
        </ViewButtonLogin>
      </View>
    </Gradient>
  );
};

export default Login;
