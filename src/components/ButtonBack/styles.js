import styled from 'styled-components/native';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {PRIMARY_COLOR} from 'react-native-dotenv';

export const Container = styled(View)({
  position: 'absolute',
  marginLeft: 30,
});

export const ButtonContainerStyle = {
  width: 55,
  maxHeight: 30,
  borderRadius: 10,
  fontSize: 10,
  marginVertical: 15,
  borderColor: PRIMARY_COLOR,
  borderWidth: 1,
};
