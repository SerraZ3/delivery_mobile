import styled from 'styled-components/native';
import {Button, TouchableOpacity, View} from 'react-native';

export const ItemInput = styled(TouchableOpacity).attrs({floatingLabel: true})({
  borderWidth: 2.5,
});

export const ButtonLogin = styled(Button)({
  alignSelf: 'center',
  marginTop: 40,
  backgroundColor: 'transparent',
  borderRadius: 5,
  borderColor: 'white',
  height: 30,
  paddingHorizontal: 30,
});
export const Footer = styled(View)({
  marginHorizontal: 5,
  paddingHorizontal: 0,
  justifyContent: 'center',
});
export const ViewButtonLogin = styled(View)({
  alignSelf: 'flex-end',
  flexDirection: 'row',
  alignItems: 'center',
});
