import styled from 'styled-components/native';
import {ScrollView, Text, View} from 'react-native';

import {
  PRIMARY_COLOR,
  PRIMARY_COLOR_DARK,
  PRIMARY_COLOR_DARK_TRANSPARENT,
} from 'react-native-dotenv';

export const Container = styled(View)({
  height: 180,
  marginTop: 20,
});

export const TabsContainer = styled(ScrollView).attrs({
  horizontal: true,
  contentContainerStyle: {paddingLeft: 10, paddigRight: 20},
  showsHorizontalScrollIndicator: false,
})({});

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
  color: PRIMARY_COLOR_DARK,
});
export const TabTitle = styled(Text)({
  fontSize: 13,
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center',
});

export const Title = styled(Text)({
  fontSize: 18,
  fontWeight: 'bold',
  marginLeft: 20,
  marginBottom: 10,
  color: PRIMARY_COLOR_DARK,
});
