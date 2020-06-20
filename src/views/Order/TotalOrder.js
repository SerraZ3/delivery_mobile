import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {useSelector} from 'react-redux';
import {Text, Button, Icon} from 'react-native-elements';
import {useDispatch} from 'react-redux';

import {ContainerTotalOrder, BodyTotalOrder} from './styles';

import {PRIMARY_COLOR} from 'react-native-dotenv';

const TotalOrder = () => {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  function cancelOrder() {
    dispatch({type: 'CANCEL_ORDER'});
  }
  return order.products[0].length > 0 ? (
    <ContainerTotalOrder>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => cancelOrder()}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}>
          <Text>Cancelar tudo</Text>
          <Icon
            reverse
            name="close"
            color="white"
            iconStyle={{color: 'red'}}
            size={12}
          />
        </View>
      </TouchableHighlight>
      <BodyTotalOrder
        style={{
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
        }}>
        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Valor total: </Text>
          <Text style={{fontSize: 18}}>{`R$ ${
            order.amount_will_paid ? order.amount_will_paid : '00,00'
          }`}</Text>
        </View>
      </BodyTotalOrder>
      <Button
        raised
        title="Finalizar pedido"
        type="outline"
        titleStyle={{color: PRIMARY_COLOR}}
        containerStyle={{width: '50%', alignSelf: 'center', marginVertical: 20}}
      />
    </ContainerTotalOrder>
  ) : null;
};

export default TotalOrder;
