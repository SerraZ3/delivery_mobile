import React from 'react';
import {ListItem, Avatar} from 'react-native-elements';

import {TouchableHighlight, Text, View} from 'react-native';
import AddRemoveProduct from '../AddRemoveProduct';

import {DEFAULT_IMG} from 'react-native-dotenv';

const ListSearch = ({
  element,
  navigation,
  product,
  establishment,
  productEstablishment,
}) => {
  return (
    <ListItem
      leftAvatar={
        <Avatar
          rounded
          size="medium"
          source={
            element.images
              ? element.images.length > 0
                ? {
                    uri: element.images[0].url,
                  }
                : require(`../../${DEFAULT_IMG}`)
              : require(`../../${DEFAULT_IMG}`)
          }
          title={element.name[0]}
        />
      }
      title={element.name ? element.name : 'Nome não encontrado'}
      subtitle={`${
        product
          ? element.price
            ? `R$ ${element.price.replace('.', ',')}\nMais informações`
            : 'Mais informações'
          : 'Veja nossos produtos'
      }`}
      bottomDivider
      onPress={() => {
        product
          ? navigation.navigate('Product', {id: element.id})
          : productEstablishment
          ? navigation.navigate('EstablishmentView', {id: element.id})
          : navigation.navigate('EstablishmentView', {id: element.id});
      }}
      rightElement={
        product ? (
          <AddRemoveProduct small id={element.id} productData={element} />
        ) : establishment ? (
          <TouchableHighlight
            onPress={() => alert('b')}
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
                // title={establishment.name[0]}
              />
            </View>
          </TouchableHighlight>
        ) : null
      }
    />
  );
};
export default ListSearch;
