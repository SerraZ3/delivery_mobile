import React, {useState, useEffect} from 'react';
// React native
import {View} from 'react-native';
// Styles
import {ProductContainer} from './styles';
// Redux
import {useSelector} from 'react-redux';
import {ListItem, Text, Avatar} from 'react-native-elements';
import {toFloat} from '../../helpers';
import AddRemoveProduct from '../../components/AddRemoveProduct';
import LoadingIcon from '../../components/LoadingIcon';
import NotFoundProduct from '../../components/NotFoundProduct';

import faker from '../../assets/fakerProducts.json';
import productsById from '../../services/productsById';

const ListProduct = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const order = useSelector((state) => state.order);

  useEffect(() => {
    // Carrega produtos baseado em um vetor de ids
    const loadProduct = async () => {
      try {
        const response = await productsById(order.products[0]);
        let data = response.data;
        setProducts(data);
      } catch (error) {
        console.log(error);

        alert('Erro ao carregar o produto. Verifique sua conxexão');
      }
    };
    // Se a diferença de produtos existir então recarregue a página
    if (products.length !== order.products[0].length) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
      loadProduct();
    }
  }, [order]);
  return loading ? (
    <LoadingIcon />
  ) : products.length > 0 ? (
    products.map((product, idx) => {
      let indexProduct = order.products[0].findIndex(
        (value) => value === product.id,
      );
      let quantity = order.products[1][indexProduct];
      let total = toFloat(quantity) * toFloat(product.price);

      return (
        <View key={idx}>
          <ListItem
            leftAvatar={
              <Avatar
                rounded
                source={{
                  uri: product.images[0].url,
                }}
                title={product.name[0]}
              />
            }
            title={product.name ? product.name : 'Nome não encontrado'}
            subtitle={`R$ ${product.price.replace(
              '.',
              ',',
            )}\nTotal: R$ ${total}`}
            bottomDivider
            rightElement={
              <AddRemoveProduct small id={product.id} productData={product} />
            }
          />
        </View>
      );
    })
  ) : (
    <NotFoundProduct />
  );
};

const ShowProduct = () => {
  return (
    <ProductContainer>
      <ListProduct />
    </ProductContainer>
  );
};

export default ShowProduct;
