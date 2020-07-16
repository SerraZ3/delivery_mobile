import React from 'react';
import {FlatList} from 'react-native';

import {Container, TabsContainer, Title} from './styles';

import ListItensHorizontal from '../ListItensHorizontal';

const Tabs = ({products, navigation, establishment, topProducts, ranking}) => (
  <FlatList
    data={products}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => {
      console.log(item);
      return item.products.length > 0 ? (
        <Container>
          <Title>{item.name}</Title>
          <TabsContainer>
            <ListItensHorizontal
              establishment={establishment}
              product={item.products}
              navigation={navigation}
            />
          </TabsContainer>
        </Container>
      ) : null;
    }}
    ListHeaderComponent={
      topProducts ? (
        <Container>
          <Title>Os 10 mais pedidos por vocês!</Title>
          <TabsContainer>
            <ListItensHorizontal
              product={topProducts}
              navigation={navigation}
              ranking
            />
          </TabsContainer>
        </Container>
      ) : null
    }
  />
);

export default Tabs;
