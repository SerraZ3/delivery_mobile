import React from 'react';

// React-native components
import {View} from 'react-native';
// React-native-elements
import {ListItem, Text, Icon} from 'react-native-elements';
// Styles
import {StoreContainer} from './styles';
import {
  DELIVERY_NAME,
  DELIVERY_ADDRESS,
  DELIVERY_NEIGHTBORHOOD,
  DELIVERY_CITY,
  DELIVERY_PHONE,
  PRIMARY_COLOR_DARK,
  DELIVERY_NAME_IMAGE,
} from 'react-native-dotenv';

const Establishment = () => {
  return (
    <StoreContainer>
      <View style={{alignItems: 'center', marginTop: 20, marginBottom: 10}}>
        <Text h4>Estabeleciomento</Text>
      </View>
      <ListItem
        leftAvatar={{
          source: require(`../../${DELIVERY_NAME_IMAGE}`),
          title: DELIVERY_NAME[0],
        }}
        title={DELIVERY_NAME}
        bottomDivider
      />
      <ListItem
        leftIcon={
          <Icon
            type="material"
            name="location-on"
            size={40}
            color={PRIMARY_COLOR_DARK}
          />
        }
        title={`${DELIVERY_ADDRESS}, ${DELIVERY_NEIGHTBORHOOD},${DELIVERY_CITY}`}
        bottomDivider
      />
      <ListItem
        leftIcon={
          <Icon
            type="material"
            name="phone"
            size={40}
            color={PRIMARY_COLOR_DARK}
          />
        }
        title={DELIVERY_PHONE}
        bottomDivider
      />
    </StoreContainer>
  );
};

export default Establishment;
