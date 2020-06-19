import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {View, Button, TouchableOpacity, Text, TextInput} from 'react-native';

// Arquivo com componentes universais
// Poderá ser utilizado em qualquer tela

export const Gradient = styled(LinearGradient).attrs(({color}) => ({
  start: {x: 1, y: 0},
  end: {x: 0, y: 1},
  colors: [color ? color[0] : '#139459', color ? color[1] : '#30A16E'],
}))((props) => ({
  flex: props.flex ? props.flex : 1,
}));

// Padrão de Input para
export const InputSquare = styled(TextInput).attrs((props) => ({
  placeholderTextColor: 'gray',
  selectionColor: 'black',
  keyboardType: props.keyboard ? 'default' : 'number-pad',
}))({
  marginHorizontal: 20,
  marginVertical: 15,
  backgroundColor: 'white',
  height: 40,
  color: 'black',
  borderRadius: 5,
});

export const InputRound = styled(TextInput).attrs((props) => ({
  placeholderTextColor: 'gray',
  selectionColor: 'black',
  keyboardType: props.keyboard ? 'default' : 'number-pad',
}))({
  marginHorizontal: 5,
  marginVertical: 10,
  backgroundColor: 'white',
  height: 40,
  color: 'black',
  borderRadius: 5,
  paddingHorizontal: 15,
  fontSize: 13,
});
