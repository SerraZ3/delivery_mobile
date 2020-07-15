import React, {useState, useEffect} from 'react';
import {View, TouchableHighlight} from 'react-native';
import {Button, Text, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ViewButtonLogin, Footer} from './styles';

import {ViewBackground, InputRound} from '../../styles';

import {useDispatch} from 'react-redux';

import {
  DELIVERY_NAME_IMAGE,
  SECONDARY_COLOR,
  PRIMARY_COLOR,
  BACKGROUND_IMAGE,
} from 'react-native-dotenv';

import login from '../../services/login';

import {CommonActions} from '@react-navigation/native';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState('luiz1@gmail.com');
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
          alert('Email ou senha inválido');
        }
      }
      if (mounted) setSubmit(false);
    };
    if (submit === true) handleSubmit();
    return () => (mounted = false);
  }, [submit]);

  return (
    <ViewBackground source={require(`../../${BACKGROUND_IMAGE}`)}>
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
        <Footer>
          <TouchableHighlight
            style={{position: 'absolute', left: 0}}
            underlayColor="transparent"
            onPress={() => navigation.navigate('Forgot')}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              Esqueci a senha
            </Text>
          </TouchableHighlight>
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
              icon={<Icon name="arrow-right" size={11} color={PRIMARY_COLOR} />}
              containerStyle={{
                width: 55,
                maxHeight: 30,
                borderRadius: 10,
                fontSize: 10,
                marginVertical: 15,
                borderColor: PRIMARY_COLOR,
                borderWidth: 1,
              }}
              type="outline"
              iconRight
              loading={loading}
              loadingProps={{size: 10}}
            />
          </ViewButtonLogin>
        </Footer>
        <View style={{position: 'absolute', bottom: 30}}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: 'white'}}>
              Não possui conta? Cadastre-se agora!
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ViewBackground>
  );
};

export default Login;
