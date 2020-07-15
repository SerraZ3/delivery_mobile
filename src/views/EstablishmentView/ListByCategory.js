import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Tabs from '../../components/Tabs';
import NotFound from '../../components/NotFound';

import productByCategoryEstablishment from '../../services/productByCategoryEstablishment';

const ListByCategory = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const establishment = useSelector((state) => state.establishment);

  useEffect(() => {
    let mounted = true;
    const loadProductCategories = async () => {
      try {
        if (mounted) {
          let page = 1;
          let limit = 4;
          let name = '';
          const response = (
            await productByCategoryEstablishment(
              page,
              limit,
              name,
              establishment.id,
            )
          ).data;

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
  return products.length !== 0 ? (
    <Tabs products={products} navigation={navigation} establishment />
  ) : (
    <NotFound message="Nenhum item cadastrado" />
  );
};

export default ListByCategory;
