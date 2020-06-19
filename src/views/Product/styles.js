import styled from 'styled-components/native';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-elements';

import {
  PRIMARY_COLOR,
  PRIMARY_COLOR_DARK,
  PRIMARY_COLOR_DARK_TRANSPARENT,
} from 'react-native-dotenv';

export const Container = styled(View)({
  height: 160,
  marginTop: 20,
  marginHorizontal: 30,
  alignItems: 'center',
});

export const TabsContainer = styled(ScrollView).attrs({
  horizontal: true,
  contentContainerStyle: {paddingLeft: 10, paddigRight: 20},
  showsHorizontalScrollIndicator: false,
})({});

export const TabItem = styled(View)({
  width: 100,
  height: 120,
  backgroundColor: 'transparent',
  borderRadius: 5,
  marginLeft: 10,
  padding: 10,
  justifyContent: 'space-between',
  alignItems: 'center',
  shadowColor: PRIMARY_COLOR_DARK_TRANSPARENT,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,

  elevation: 2,
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

export const TextProduct = styled(Text).attrs((props) => ({
  ...props,
}))({color: PRIMARY_COLOR_DARK, textAlign: 'center'});
