import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {View, Modal, FlatList} from 'react-native';
import {Image, Text} from 'react-native-elements';
import ImageViewer from 'react-native-image-zoom-viewer';

import ButtonBack from '../../components/ButtonBack';
import {getWallpaper} from '../../helpers';

const EstablishmentInfo = ({navigation}) => {
  const [active, setActive] = useState(false);
  const establishment = useSelector((state) => state.establishment);
  return (
    <>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image
          source={{uri: getWallpaper(establishment.images).url}}
          style={{width: 200, height: 200, marginVertical: 30}}
        />
        <Text h4>{establishment.name}</Text>
        <Text style={{fontSize: 18, marginVertical: 20}}>
          {establishment.description}
        </Text>
        <FlatList
          data={establishment.addresses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => (
            <Text
              style={{
                fontSize: 17,
              }}>{`${item.street}, ${item.number}, ${item.neightborhood}`}</Text>
          )}
        />
        <Modal
          visible={active}
          transparent={true}
          onRequestClose={() => setActive(false)}>
          <ImageViewer
            imageUrls={establishment.images[0]}
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
      </View>
      <ButtonBack navigation={navigation} bottom />
    </>
  );
};

export default EstablishmentInfo;
