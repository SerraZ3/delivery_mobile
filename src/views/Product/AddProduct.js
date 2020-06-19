import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Icon, Text, Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {toFloat} from '../../helpers';
// import { Container } from './styles';
import {PRIMARY_COLOR_DARK} from 'react-native-dotenv';

const AddProduct = ({navigation, id, productData}) => {
  const [product, setProduct] = useState(0);
  const order = useSelector((state) => state.order);
  const [orderAction, setOrderAction] = useState({active: false, type: ''});
  const dispatch = useDispatch();

  useEffect(() => {
    let checkProductExist = order.products[0].findIndex(
      (value) => id === value,
    );
    if (checkProductExist !== -1) {
      setProduct(order.products[1][checkProductExist]);
    }
  }, []);
  useEffect(() => {
    const handleOrderAction = async () => {
      let countProduct = null;
      if (orderAction.type === 'add') {
        countProduct = product + 1;
        dispatch({
          type: 'SET_AMOUNT_WILL_PAID',
          amount_will_paid: toFloat(
            toFloat(order.amount_will_paid) + toFloat(productData.price),
          ),
        });
        setProduct(product + 1);
      } else {
        if (product > 0) {
          countProduct = product - 1;
          dispatch({
            type: 'SET_AMOUNT_WILL_PAID',
            amount_will_paid: toFloat(
              toFloat(order.amount_will_paid) - toFloat(productData.price),
            ),
          });
          setProduct(product - 1);
        }
      }

      let checkProductExist = order.products[0].findIndex(
        (value) => id === value,
      );
      // Se o produto nao existir no pedidio adiciona
      if (checkProductExist === -1) {
        dispatch({type: 'PUSH_PRODUCT', id, quantity: countProduct});
      } else {
        // Se o contador for 0
        if (countProduct === 0) {
          dispatch({type: 'REMOVE_PRODUCT', idx: checkProductExist});
        }
      }

      setOrderAction({active: false, type: ''});
    };
    if (orderAction.active) {
      handleOrderAction();
    }
  }, [orderAction]);
  return (
    <>
      <Text style={{marginTop: 20}}>Adicione ao seu pedido</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          buttonStyle={{backgroundColor: 'white'}}
          onPress={() => setOrderAction({type: 'remove', active: true})}
          icon={<Icon name="remove" size={25} color={PRIMARY_COLOR_DARK} />}
          containerStyle={{
            justifyContent: 'center',
            borderRadius: 30,
            fontSize: 10,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          type="outline"
          iconRight
        />
        <Text style={{fontSize: 70, marginHorizontal: 20}}>{product}</Text>
        <Button
          buttonStyle={{backgroundColor: 'white'}}
          onPress={() => setOrderAction({type: 'add', active: true})}
          icon={<Icon name="add" size={25} color={PRIMARY_COLOR_DARK} />}
          containerStyle={{
            justifyContent: 'center',
            borderRadius: 30,
            fontSize: 10,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          type="outline"
          iconRight
        />
      </View>
    </>
  );
};

export default AddProduct;
