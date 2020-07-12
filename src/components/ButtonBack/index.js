import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {PRIMARY_COLOR} from 'react-native-dotenv';
import {Container, ButtonContainerStyle} from './styles';
const ButtonBack = ({navigation, bottom}) => {
  const [loading, setLoading] = useState(false);
  return (
    <Container style={bottom ? {bottom: 30} : {top: 30}}>
      <Button
        buttonStyle={{backgroundColor: 'white'}}
        onPress={() => navigation.goBack()}
        icon={<Icon name="arrow-left" size={11} color={PRIMARY_COLOR} />}
        containerStyle={ButtonContainerStyle}
        type="outline"
        iconRight
        loading={loading}
        loadingProps={{size: 10}}
      />
    </Container>
  );
};

export default ButtonBack;
