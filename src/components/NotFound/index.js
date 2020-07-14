import React from 'react';
import {View, Text} from 'react-native';

import {RED_COLOR} from 'react-native-dotenv';

const NotFound = ({message}) => {
  return (
    <View style={{alignItems: 'center', marginTop: 20}}>
      <Text style={{color: RED_COLOR, fontSize: 18}}>
        {message ? message : 'Nenhum item encontrado'}
      </Text>
    </View>
  );
};

export default NotFound;
