import styled from 'styled-components/native';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-elements';

import {
  PRIMARY_COLOR_LIGHT,
  PRIMARY_COLOR_TRANSPARENT,
  PRIMARY_COLOR,
} from 'react-native-dotenv';

export const Container = styled(View)({
  flex: 1,
  marginTop: 20,
  marginHorizontal: 20,
});

export const ProductContainer = styled(ScrollView)({
  maxHeight: '60%',
  marginTop: 20,
});

export const ContainerTotalOrder = styled(View)({
  marginVertical: 30,
});

export const BodyTotalOrder = styled(View)({
  backgroundColor: 'white',
  borderRadius: 10,
  minHeight: 50,
  justifyContent: 'center',
});
