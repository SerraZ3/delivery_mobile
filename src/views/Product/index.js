import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import ShowProduct from './ShowProduct';
import ButtonBack from './ButtonBack';
import AddProduct from './AddProduct';

import {Container} from './styles';
import api from '../../services/api';

const Product = ({route: {params}, navigation}) => {
  const [product, setProduct] = useState({
    description: '',
    name: '',
    price: '',
  });
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await api.get(`/client/products/${params.id}`);
        let data = response.data;
        setProduct(data);
      } catch (error) {
        alert('Erro ao procurar produto');
      }
    };
    loadProduct();
  }, []);
  return (
    <Container>
      <ButtonBack navigation={navigation} />
      <View style={{height: 30}}></View>
      <ShowProduct params={params} product={product}></ShowProduct>
      <AddProduct
        navigation={navigation}
        id={params.id}
        productData={product}
      />
    </Container>
  );
};

export default Product;
