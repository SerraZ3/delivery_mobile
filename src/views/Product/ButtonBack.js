import React from 'react';
import {View} from 'react-native';
import {Icon, Text, Button} from 'react-native-elements';

import {PRIMARY_COLOR} from 'react-native-dotenv';

const ButtonBack = ({navigation}) => {
  return (
    <View
      style={{
        position: 'absolute',
        left: -15,
        top: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        buttonStyle={{backgroundColor: 'white'}}
        onPress={() => navigation.goBack()}
        icon={<Icon name="arrow-back" size={15} color={PRIMARY_COLOR} />}
        containerStyle={{
          width: 45,
          height: 25,
          justifyContent: 'center',
          borderRadius: 10,
          fontSize: 10,
          marginRight: 10,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        type="outline"
        iconRight
      />
      <Text style={{fontSize: 15, fontWeight: 'bold', color: PRIMARY_COLOR}}>
        Voltar
      </Text>
    </View>
  );
};

export default ButtonBack;
