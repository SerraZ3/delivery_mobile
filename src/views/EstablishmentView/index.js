import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native';

import {SearchBar, ListItem, Avatar, Icon} from 'react-native-elements';
import ListByCategory from './ListByCategory';
import ListSearch from '../../components/ListSearch';
import LoadingIcon from '../../components/LoadingIcon';
import NotFound from '../../components/NotFound';
import productByCategoryEstablishment from '../../services/productByCategoryEstablishment';
import {getWallpaper} from '../../helpers';

import {
  PRIMARY_COLOR,
  PRIMARY_COLOR_TRANSPARENT,
  DEFAULT_IMG,
} from 'react-native-dotenv';

const EstablishmentView = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState(0);

  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);
  const establishment = useSelector((state) => state.establishment);

  const loadPage = async (pageNumber = page, shouldRefresh = false) => {
    if (!totalpage && pageNumber > totalpage) return;

    try {
      setLoading(true);

      let limit = 5;

      let response = await productByCategoryEstablishment(
        pageNumber,
        limit,
        search,
        establishment.id,
      );
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
      <ListItem
        leftAvatar={
          <Avatar
            rounded
            size="medium"
            source={
              establishment.images.length > 0
                ? {
                    uri: getWallpaper(establishment.images).url,
                  }
                : require(`../../${DEFAULT_IMG}`)
            }
            title={establishment.name[0]}
          />
        }
        rightIcon={
          <Icon
            name="info-outline"
            type="fontawesome"
            size={30}
            color="black"
          />
        }
        onPress={() => navigation.navigate('EstablishmentInfo')}
        titleStyle={{fontSize: 20}}
        title={establishment.name ? establishment.name : 'Nome não encontrado'}
      />
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
        onClear={() => {
          setPage(1);
          setTotalPage(0);
        }}
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
            renderItem={({item, index}) => {
              return (
                <ListSearch
                  navigation={navigation}
                  element={item}
                  product
                  title
                />
              );
            }}
          />
        ) : (
          <NotFound />
        )
      ) : (
        <ListByCategory navigation={navigation} />
      )}
    </>
  );
};

export default EstablishmentView;
