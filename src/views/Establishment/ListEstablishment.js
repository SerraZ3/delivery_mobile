import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  FlatList,
  TouchableHighlight,
  Text,
  View,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import ImageViewer from 'react-native-image-zoom-viewer';
import {PRIMARY_COLOR_TRANSPARENT} from 'react-native-dotenv';
import searchEstablishments from '../../services/searchEstablishments';
import {getWallpaper} from '../../helpers';

const ListEstablishment = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);
  const [menuImage, setMenuImage] = useState([]);
  const dispatch = useDispatch();
  function addEstablishment(data) {
    dispatch({type: 'ADD_ESTABLISHMENT', data});
  }
  useEffect(() => {
    let mounted = true;
    const loadProductCategories = async () => {
      try {
        if (mounted) {
          let page = 1;
          let limit = 4;
          let name = '';
          const response = (await searchEstablishments(page, limit, name)).data;

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
  const openMenu = (images) => {
    let urlImage = images.find((val) => val.pivot.menu);
    setMenuImage([{url: urlImage.url}]);
    setActive(true);
  };

  return (
    <>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index}) => {
          return (
            <ListItem
              leftAvatar={
                <Avatar
                  rounded
                  size="medium"
                  source={{
                    uri: getWallpaper(item.images).url,
                  }}
                  title={item.name[0]}
                />
              }
              title={item.name ? item.name : 'Nome não encontrado'}
              subtitle={'Veja nossos produtos'}
              bottomDivider
              onPress={() => {
                addEstablishment(item);
                navigation.navigate('EstablishmentView', {id: item.id});
              }}
              rightElement={
                <TouchableHighlight
                  onPress={() => openMenu(item.images)}
                  underlayColor="transparent">
                  <View
                    style={{
                      alignItems: 'center',
                    }}>
                    <Text>Cardápio</Text>
                    <Avatar
                      source={require('../../assets/order.png')}
                      size="medium"
                      rounded
                      title={item.name[0]}
                    />
                  </View>
                </TouchableHighlight>
              }
            />
          );
        }}
      />
      <Modal
        visible={active}
        transparent={true}
        onRequestClose={() => setActive(false)}>
        <ImageViewer
          imageUrls={menuImage}
          index={0}
          renderIndicator={(currentIndex, allSize) => (
            <View style={{position: 'absolute', top: 0, right: 0, left: 0}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontWeight: 'bold',
                  top: 20,
                  textAlign: 'center',
                }}>
                {currentIndex}/{allSize}
              </Text>
            </View>
          )}
          backgroundColor="white"
          enableSwipeDown={true}
        />
      </Modal>
    </>
  );
};

export default ListEstablishment;
