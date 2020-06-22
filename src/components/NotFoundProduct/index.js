import React from 'react';
import {View, Text} from 'react-native';

import {RED_COLOR} from 'react-native-dotenv';

const NotFoundProduct = () => {
  return (
    <View style={{alignItems: 'center', marginTop: 20}}>
      <Text style={{color: RED_COLOR, fontSize: 18}}>
        Nenhum produto encontrado
      </Text>
    </View>
  );
};

export default NotFoundProduct;
