import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import ShowProduct from './ShowProduct';
import ButtonBack from './ButtonBack';
import AddRemoveProduct from '../../components/AddRemoveProduct';

import {Container} from './styles';
import showProduct from '../../services/showProduct';

const Product = ({route: {params}, navigation}) => {
  const [product, setProduct] = useState({
    description: '',
    name: '',
    price: '',
  });
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await showProduct(params.id);

        setProduct(response);
      } catch (error) {
        alert('Erro ao procurar produto. Verifique sua conxexão');
        navigation.goBack();
      }
    };
    loadProduct();
  }, []);
  return (
    <Container>
      <ButtonBack navigation={navigation} />
      <View style={{height: 30}}></View>
      <ShowProduct params={params} product={product}></ShowProduct>
      <AddRemoveProduct
        navigation={navigation}
        id={params.id}
        productData={product}
      />
    </Container>
  );
};

export default Product;
