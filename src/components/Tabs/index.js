import React from 'react';
import {ActivityIndicator, FlatList, TouchableHighlight} from 'react-native';
import {Image} from 'react-native-elements';

import {
  Container,
  TabsContainer,
  TabItem,
  TabPrice,
  TabTitle,
  Title,
} from './styles';
import {PRIMARY_COLOR_TRANSPARENT} from 'react-native-dotenv';

const ListItens = ({product, count, navigation}) => {
  const openProduct = (id) => {
    navigation.navigate('Product', {id});
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

const Tabs = ({products, navigation}) => (
  <FlatList
    data={products}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item, index}) => {
      return item.products.length > 0 ? (
        <Container>
          <Title>{item.name}</Title>
          <TabsContainer>
            <ListItens
              product={item.products}
              count={index}
              navigation={navigation}
            />
          </TabsContainer>
        </Container>
      ) : null;
    }}
  />
);

export default Tabs;
