import React, {useState, useEffect} from 'react';
import Tabs from '../../components/Tabs';

import {SearchBar} from 'react-native-elements';
import api from '../../services/api';
import faker from '../../assets/fakerProducts.json';

import {PRIMARY_COLOR, PRIMARY_COLOR_TRANSPARENT} from 'react-native-dotenv';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const activeFaker = false;

  const [search, setSearch] = useState('');
  useEffect(() => {
    let mounted = true;
    const handleSubmit = async () => {
      try {
        if (mounted) {
          setLoading(true);
          let page = 1;
          let limit = 10;
          let name = '';
          const response = await api.get(
            `/client/product-categories?page=${page}&limit=${limit}&name=${name}`,
            {},
          );

          let data = activeFaker ? faker : response.data.data;

          setProducts(data);

          setLoading(false);
        }
      } catch (error) {
        if (mounted) {
          setLoading(false);
          alert('Conexão não estabelecida');
        }
      }
    };
    handleSubmit();
    return () => (mounted = false);
  }, []);
  return (
    <>
      <SearchBar
        placeholder="Pesquise por um produto"
        placeholderTextColor={PRIMARY_COLOR_TRANSPARENT}
        onChangeText={(value) => setSearch(value)}
        lightTheme
        round
        value={search}
        showCancel
        showLoading={loading}
        searchIcon={{color: PRIMARY_COLOR}}
        containerStyle={{
          backgroundColor: 'transparent',
        }}
        inputStyle={{color: 'black'}}
      />
      <Tabs
        products={products}
        faker={activeFaker}
        navigation={navigation}></Tabs>
    </>
  );
};

export default Home;
