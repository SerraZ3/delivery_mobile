import React from 'react';
import {Text} from 'react-native-elements';

import {Container} from './styles';
import ShowProduct from './ShowProduct';
import TotalOrder from './TotalOrder';
import {PRIMARY_COLOR} from 'react-native-dotenv';

const Order = () => {
  return (
    <Container>
      <Text h4 style={{color: PRIMARY_COLOR, textAlign: 'center'}}>
        Meus Pedidos
      </Text>
      <ShowProduct />
      <TotalOrder />
    </Container>
  );
};

export default Order;
