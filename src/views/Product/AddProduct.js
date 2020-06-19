import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Icon, Text, Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {toFloat} from '../../helpers';
// import { Container } from './styles';
import {PRIMARY_COLOR_DARK} from 'react-native-dotenv';

const AddProduct = ({navigation, id, faker, productData}) => {
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
      try {
        let quantityProduct = null;
        // Verifica se o produto existe e pega o index dele
        let checkProductExist = order.products[0].findIndex(
          (value) => id === value,
        );
        if (orderAction.type === 'add') {
          // Produto atual +1
          quantityProduct = product + 1;
          // Incrementa o preço do produto no total a ser pago
          await dispatch({
            type: 'SET_AMOUNT_WILL_PAID',
            amount_will_paid: toFloat(
              toFloat(order.amount_will_paid) + toFloat(productData.price),
            ),
          });

          // Altera o valor do produto no component
          setProduct(product + 1);
          // Se o produto nao existir no pedidio adiciona
          if (checkProductExist === -1) {
            dispatch({type: 'PUSH_PRODUCT', id, quantity: quantityProduct});
          } else {
            dispatch({type: 'INCREMENT_PRODUCT', idx: checkProductExist});
          }
        } else {
          // Só decrementa se o produto for maior que 1
          if (product > 0) {
            // Decrementa
            quantityProduct = product - 1;
            // Decrementa valor do produto no total a ser pago
            await dispatch({
              type: 'SET_AMOUNT_WILL_PAID',
              amount_will_paid: toFloat(
                toFloat(order.amount_will_paid) - toFloat(productData.price),
              ),
            });
            // Altera valor do porduto no component
            setProduct(product - 1);

            // Se a quantidade do produto for 0 remove ele da lista
            if (quantityProduct === 0) {
              dispatch({type: 'REMOVE_PRODUCT', idx: checkProductExist});
            } else {
              // Se não decrementa
              dispatch({
                type: 'DECREMENT_PRODUCT',
                idx: checkProductExist,
                quantity: quantityProduct,
              });
            }
          }
        }
      } catch (error) {
        console.warn(error);
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
