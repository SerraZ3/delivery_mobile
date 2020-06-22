import React from 'react';
import {ListItem, Avatar} from 'react-native-elements';
import AddRemoveProduct from '../../components/AddRemoveProduct';

const ListSearchProduct = ({product}) => {
  return (
    <ListItem
      leftAvatar={
        <Avatar
          rounded
          source={{
            uri: product.images[0].url,
          }}
          title={product.name[0]}
        />
      }
      title={product.name ? product.name : 'Nome não encontrado'}
      subtitle={`R$ ${product.price.replace('.', ',')}`}
      bottomDivider
      rightElement={
        <AddRemoveProduct small id={product.id} productData={product} />
      }
    />
  );
};
export default ListSearchProduct;
