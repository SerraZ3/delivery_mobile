import React from 'react';
import {ActivityIndicator, TouchableHighlight, View} from 'react-native';
import {Image, Text} from 'react-native-elements';

import {TabItem, TabPrice, TabTitle} from './styles';
import {PRIMARY_COLOR_TRANSPARENT, PRIMARY_COLOR} from 'react-native-dotenv';

const ListItensHorizontal = ({product, ranking, navigation, establishment}) => {
  const openProduct = (id) => {
    establishment
      ? navigation.navigate('EstablishmentProduct', {id})
      : navigation.navigate('Product', {id});
  };
  return product.map((value, idx) => {
    return (
      <TouchableHighlight
        onPress={() => openProduct(value.id)}
        underlayColor="white"
        key={idx}>
        <TabItem
          style={{
            shadowColor: PRIMARY_COLOR_TRANSPARENT,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 1,
          }}>
          {ranking ? (
            <View style={{position: 'absolute', left: 5, top: 0}}>
              <Text style={{fontWeight: 'bold', color: PRIMARY_COLOR}}>
                {idx + 1}º
              </Text>
            </View>
          ) : null}

          <Image
            source={{uri: value.images[0].url}}
            style={{width: 50, height: 50}}
            PlaceholderContent={<ActivityIndicator />}
          />
          <TabTitle>{value.name}</TabTitle>
          <TabPrice>{`R$ ${value.price.replace('.', ',')}`}</TabPrice>
        </TabItem>
      </TouchableHighlight>
    );
  });
};

export default ListItensHorizontal;
