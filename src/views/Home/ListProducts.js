import React, {useState, useEffect} from 'react';
import Tabs from '../../components/Tabs';

import productByCategoryBest from '../../services/productByCategoryBest';

const ListProducts = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [top, setTop] = useState([]);

  useEffect(() => {
    let mounted = true;
    const loadProductCategories = async () => {
      try {
        if (mounted) {
          let page = 1;
          let limit = 4;
          let name = '';
          const response = await productByCategoryBest(page, limit, name);

          let data = response.productCategories.data;
          let topProduct = response.betterSellerProduct.data.products;
          setProducts(data);
          setTop(topProduct);
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
  return <Tabs products={products} topProducts={top} navigation={navigation} />;
};

export default ListProducts;
