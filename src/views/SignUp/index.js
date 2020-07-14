import React, {useState, useEffect, useRef} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {PRIMARY_COLOR, BACKGROUND_IMAGE} from 'react-native-dotenv';
import {ContainerTitle} from './styles';
import {InputRound, ViewBackground} from '../../styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {dateLess10} from '../../helpers';
import signUp from '../../services/signUp';
import ButtonBack from '../../components/ButtonBack';
import {useDispatch} from 'react-redux';
import {CommonActions} from '@react-navigation/native';

const SignUp = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [date_birth, setDate_birth] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const refDatePicker = useRef(null);

  const dispatch = useDispatch();

  function addAuth(refresh_token, token, type) {
    dispatch({type: 'ADD_AUTH', auth: {refresh_token, token, type}});
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    let day = dateLess10(currentDate.getDate());
    let month = dateLess10(currentDate.getMonth() + 1);
    let year = currentDate.getFullYear();
    let newDate = `${day}/${month}/${year}`;

    setDate(currentDate);
    setDate_birth(newDate);
    refDatePicker.current.blur();
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  // const showTimepicker = () => {
  //   showMode('time');
  // };

  useEffect(() => {
    let mounted = true;
    const handleSubmit = async () => {
      try {
        if (mounted) {
          setLoading(true);

          const response = await signUp({
            email,
            password,
            password_confirmation: confirmPassword,
            person: {
              name,
              date_birth,
            },
          });

          let data = response.data;
          mounted = false;
          addAuth(data.refreshToken, data.token, data.type);
          setLoading(false);
          setTimeout(() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{name: 'ClientTab'}],
              }),
            );
          }, 1000);
        }
      } catch (error) {
        if (mounted) {
          setLoading(false);
          alert('Erro ao cadastrar, tente novamente');
        }
      }
      if (mounted) setSubmit(false);
    };
    if (submit === true) handleSubmit();
    return () => (mounted = false);
  }, [submit]);
  return (
    <ViewBackground source={require(`../../${BACKGROUND_IMAGE}`)}>
      <ContainerTitle>
        <Text style={{color: 'white'}} h4>
          Cadastro
        </Text>
      </ContainerTitle>
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
        <InputRound
          placeholder={'Data de nascimento'}
          keyboard={true}
          value={`${date_birth}`}
          onFocus={showDatepicker}
          ref={refDatePicker}
        />

        <View style={{marginHorizontal: 50, marginTop: 10}}>
          <Button
            buttonStyle={{backgroundColor: 'white'}}
            titleStyle={{color: PRIMARY_COLOR}}
            title="Registrar"
            onPress={() => setSubmit(true)}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{backgroundColor: 'white', paddingVertical: 10}} />
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <ButtonBack navigation={navigation} bottom />
    </ViewBackground>
  );
};

export default SignUp;
