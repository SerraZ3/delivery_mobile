import React, {useState, useEffect} from 'react';
import Tabs from '../../components/Tabs';

import productsByCategory from '../../services/productsByCategory';

const ListByCategory = ({navigation}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let mounted = true;
    const loadProductCategories = async () => {
      try {
        if (mounted) {
          let page = 1;
          let limit = 4;
          let name = '';
          const response = (await productsByCategory(page, limit, name)).data;

          let data = response;

          setProducts(data);
        }
      } catch (error) {
        if (mounted) {
          alert('Conexão não estabelecida');
        }
      }
    };
    loadProductCategories();
    return () => (mounted = false);
  }, []);
  return <Tabs products={products} navigation={navigation} />;
};

export default ListByCategory;
