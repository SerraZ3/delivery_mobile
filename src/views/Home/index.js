import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {SearchBar} from 'react-native-elements';
import ListByCategory from './ListByCategory';
import ListSearchProduct from './ListSearchProduct';
import LoadingIcon from '../../components/LoadingIcon';
import NotFoundProduct from '../../components/NotFoundProduct';
import searchProduct from '../../services/searchProduct';

import {PRIMARY_COLOR, PRIMARY_COLOR_TRANSPARENT} from 'react-native-dotenv';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState(0);

  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);

  const loadPage = async (pageNumber = page, shouldRefresh = false) => {
    if (totalpage && pageNumber > totalpage) return;

    try {
      setLoading(true);

      let limit = 5;

      let response = await searchProduct(pageNumber, limit, search);

      let totalPage = response.pagination.total;

      let data = response.data;

      setTotalPage(Math.ceil(totalPage / limit));

      setSearchData(shouldRefresh ? data : [...searchData, ...data]);

      setPage(pageNumber + 1);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert('Conexão não estabelecida');
    }
  };

  useEffect(() => {
    loadPage(1, true);
  }, [search]);

  const refreshList = async () => {
    setRefreshing(true);
    await loadPage(1, true);
    setRefreshing(false);
  };
  return (
    <>
      <SearchBar
        placeholder="Pesquise por um produto"
        placeholderTextColor={PRIMARY_COLOR_TRANSPARENT}
        onChangeText={(value) => setSearch(value)}
        value={search}
        lightTheme
        round
        showCancel
        showLoading={loading}
        searchIcon={{color: PRIMARY_COLOR}}
        containerStyle={{
          backgroundColor: 'transparent',
        }}
        inputStyle={{color: 'black'}}
      />
      {search ? (
        searchData.length > 0 ? (
          <FlatList
            data={searchData}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={() => loadPage()}
            onEndReachedThreshold={0.2}
            onRefresh={refreshList}
            refreshing={refreshing}
            ListFooterComponent={loading && <LoadingIcon />}
            renderItem={({item, index}) => (
              <ListSearchProduct navigation={navigation} product={item} />
            )}
          />
        ) : (
          <NotFoundProduct />
        )
      ) : (
        <ListByCategory navigation={navigation} />
      )}
    </>
  );
};

export default Home;
