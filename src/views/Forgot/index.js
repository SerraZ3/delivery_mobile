import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {PRIMARY_COLOR, BACKGROUND_IMAGE} from 'react-native-dotenv';
import {InputRound, ViewBackground} from '../../styles';

import resetPassword from '../../services/resetPassword';
import ButtonBack from '../../components/ButtonBack';

const Forgot = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState('');
  useEffect(() => {
    let mounted = true;
    const handleSubmit = async () => {
      try {
        if (mounted) {
          if (email.length < 1) {
            alert('O e-mail obrigatório');
            return;
          }
          setLoading(true);
          const response = await resetPassword(email);
          setLoading(false);
          navigation.goBack();
        }
        alert(
          'E-mail de recuperação enviado com sucesso. Verique sua caixa de entrada!',
        );
        setSubmit(false);
      } catch (error) {
        if (mounted) {
          setLoading(false);
          alert('Email ou senha inválido');
        }
        setSubmit(false);
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
          Recuperação de senha
        </Text>
      </View>
      <View style={{flex: 4, marginHorizontal: 30}}>
        <Text style={{color: 'white', textAlign: 'justify', fontSize: 18}}>
          Digite o e-mail da sua conta para recuperação da senha.
        </Text>
        <InputRound
          placeholder={'E-mail'}
          keyboard={true}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />

        <View style={{marginHorizontal: 50, marginTop: 10}}>
          <Button
            buttonStyle={{backgroundColor: 'white'}}
            titleStyle={{color: PRIMARY_COLOR}}
            onPress={() => setSubmit(true)}
            title="Enviar"
            loading={loading}
            loadingProps={{color: 'red'}}
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

export default Forgot;
