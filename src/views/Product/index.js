import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import ShowProduct from './ShowProduct';
import AddRemoveProduct from '../../components/AddRemoveProduct';
import ButtonBack from '../../components/ButtonBack';

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
    <>
      <Container>
        <View style={{height: 30}} />
        <ShowProduct params={params} product={product} />
        <AddRemoveProduct
          navigation={navigation}
          id={params.id}
          productData={product}
        />
      </Container>
      <ButtonBack navigation={navigation} bottom />
    </>
  );
};

export default Product;
