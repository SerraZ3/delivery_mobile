import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Button, Text, Avatar} from 'react-native-elements';
import {
  DELIVERY_NAME,
  DELIVERY_NAME_IMAGE,
  PRIMARY_COLOR_LIGHT,
  SECONDARY_COLOR,
  PRIMARY_COLOR,
  BACKGROUND_IMAGE,
} from 'react-native-dotenv';
import {Gradient, InputRound, ViewBackground} from '../../styles';

import signUp from '../../services/signUp';
import ButtonBack from '../../components/ButtonBack';

const SignUp = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  useEffect(() => {
    let mounted = true;
    const handleSubmit = async () => {
      try {
        if (mounted) {
          setLoading(true);

          const response = await signUp();
          console.log(response);

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
        console.log(error);
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
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 30,
        }}>
        <Text style={{color: 'white'}} h4>
          Cadastro
        </Text>
      </View>
      <View style={{flex: 5, marginHorizontal: 30}}>
        <InputRound
          placeholder={'Nome Completo'}
          keyboard={true}
          value={name}
          onChangeText={(value) => setName(value)}
        />
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
        <InputRound
          placeholder={'Confirmar a senha'}
          secureTextEntry={true}
          keyboard={true}
          value={confirmPassword}
          onChangeText={(value) => setConfirmPassword(value)}
        />
        <View style={{marginHorizontal: 50, marginTop: 10}}>
          <Button
            buttonStyle={{backgroundColor: 'white'}}
            titleStyle={{color: PRIMARY_COLOR}}
            title="Registrar"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{backgroundColor: 'white', paddingVertical: 10}} />
        </View>
      </View>
      <ButtonBack navigation={navigation} bottom />
    </ViewBackground>
  );
};

export default SignUp;
