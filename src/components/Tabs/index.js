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
const ListItens = ({product, count, faker, navigation}) => {
  const openProduct = (id) => {
    navigation.navigate('Product', {id});
  };
  return product.map((value) => {
    return (
      <>
        <TouchableHighlight
          onPress={() => openProduct(value.id)}
          underlayColor="white">
          <TabItem>
            <Image
              source={
                !faker
                  ? {uri: value.images[0].url}
                  : count === 2
                  ? require('../../assets/refri.jpeg')
                  : require('../../assets/pizza.jpg')
              }
              style={{width: 50, height: 50}}
              PlaceholderContent={<ActivityIndicator />}
            />
            <TabTitle>{value.name}</TabTitle>
            <TabPrice>{`R$ ${value.price.replace('.', ',')}`}</TabPrice>
          </TabItem>
        </TouchableHighlight>
      </>
    );
  });
};

const Tabs = ({products, faker, navigation}) => (
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
              faker={faker}
              navigation={navigation}
            />
          </TabsContainer>
        </Container>
      ) : null;
    }}
  />
);

export default Tabs;
