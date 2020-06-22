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
        let fakerProduct = {
          data: {
            description: 'Pizza sabor 4 queijos',
            name: '4 queijos',
            price: '21.50',
            images: [1],
          },
        };
        const response = params.faker
          ? fakerProduct.data
          : await showProduct(params.id);

        setProduct(response);
      } catch (error) {
        console.log(error);
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
        faker={params.faker}
        productData={product}
      />
    </Container>
  );
};

export default Product;
