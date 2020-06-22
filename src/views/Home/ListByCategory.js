import React, {useState, useEffect} from 'react';
import Tabs from '../../components/Tabs';

import productsByCategory from '../../services/productsByCategory';
import faker from '../../assets/fakerProducts.json';
import {FAKER} from 'react-native-dotenv';

const ListByCategory = ({navigation}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let mounted = true;
    const loadProductCategories = async () => {
      try {
        if (mounted) {
          let page = 1;
          let limit = 10;
          let name = '';
          const response = await productsByCategory(page, limit, name);

          let data = FAKER ? faker : response.data;

          setProducts(data);
        }
      } catch (error) {
        if (mounted) {
          console.log(error);

          alert('Conexão não estabelecida');
        }
      }
    };
    loadProductCategories();
    return () => (mounted = false);
  }, []);
  return <Tabs products={products} faker={faker} navigation={navigation} />;
};

export default ListByCategory;
