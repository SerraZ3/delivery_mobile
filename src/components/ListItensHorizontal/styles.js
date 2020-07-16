import styled from 'styled-components/native';
import {Text, View} from 'react-native';

import {PRIMARY_COLOR} from 'react-native-dotenv';

export const TabItem = styled(View)({
  width: 110,
  height: 140,
  backgroundColor: 'white',
  borderRadius: 5,
  marginLeft: 10,
  padding: 10,
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const TabPrice = styled(Text)({
  fontSize: 13,
  color: PRIMARY_COLOR,
});
export const TabTitle = styled(Text)({
  fontSize: 13,
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center',
});
