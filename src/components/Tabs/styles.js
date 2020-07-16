import styled from 'styled-components/native';
import {ScrollView, Text, View} from 'react-native';

import {PRIMARY_COLOR} from 'react-native-dotenv';

export const Container = styled(View)({
  height: 180,
  marginTop: 20,
});

export const TabsContainer = styled(ScrollView).attrs({
  horizontal: true,
  contentContainerStyle: {paddingLeft: 10, paddigRight: 20},
  showsHorizontalScrollIndicator: false,
})({});

export const Title = styled(Text)({
  fontSize: 18,
  fontWeight: 'bold',
  marginLeft: 20,
  marginBottom: 10,
  color: PRIMARY_COLOR,
});
