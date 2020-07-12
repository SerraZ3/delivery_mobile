import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {PRIMARY_COLOR, BACKGROUND_IMAGE} from 'react-native-dotenv';
import {InputRound, ViewBackground} from '../../styles';

import signUp from '../../services/signUp';
import ButtonBack from '../../components/ButtonBack';
const Forgot = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState('');
  // useEffect(() => {
  //   let mounted = true;
  //   const handleSubmit = async () => {
  //     try {
  //       if (mounted) {
  //         setLoading(true);

  //         const response = await signUp();
  //         console.log(response);

  //         let data = response.data;
  //         addAuth(data.refreshToken, data.token, data.type);
  //         setLoading(false);
  //         navigation.dispatch(
  //           CommonActions.reset({
  //             index: 1,
  //             routes: [{name: 'ClientTab'}],
  //           }),
  //         );
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       if (mounted) {
  //         setLoading(false);
  //         alert('Email ou senha inválido');
  //       }
  //     }
  //     if (mounted) setSubmit(false);
  //   };
  //   if (submit === true) handleSubmit();
  //   return () => (mounted = false);
  // }, [submit]);
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
            onPress={() =>
              alert(
                'O e-mail foi enviado com sucesso. Verifique sua caixa de entrada',
              )
            }
            title="Enviar"
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
