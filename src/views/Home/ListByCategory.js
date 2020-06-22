import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Tabs from '../../components/Tabs';

import productsByCategory from '../../services/productsByCategory';

const ListByCategory = ({faker, navigation}) => {
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

          let data = faker ? faker : response.data;

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
