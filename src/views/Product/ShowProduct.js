import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import {TextProduct} from './styles';

import {PRIMARY_COLOR, PRIMARY_COLOR_TRANSPARENT} from 'react-native-dotenv';

const Product = ({params: {faker}, product}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const mapImages = (data) => {
      let fakerImages = [
        require('../../assets/refri.jpeg'),
        require('../../assets/pizza.jpg'),
        require('../../assets/pizza.jpg'),
      ];
      let newImages = faker
        ? fakerImages
        : data.images.map((image) => {
            return image.url;
          });
      setImages(newImages);
    };

    if (product.images) {
      mapImages(product);
    }
  }, [product]);

  return (
    <>
      <View style={{minHeight: 220}}>
        <SliderBox
          images={images}
          disableOnPress
          autoplay
          circleLoop
          sliderBoxHeight={400}
          ImageComponentStyle={{
            borderRadius: 15,
            marginTop: 5,
            height: '95%',
            resizeMode: 'contain',
          }}
          dotStyle={{display: 'none'}}
          imageLoadingColor={PRIMARY_COLOR}
          dotColor={PRIMARY_COLOR}
          inactiveDotColor={PRIMARY_COLOR_TRANSPARENT}
        />
      </View>
      <TextProduct h3>{product.name}</TextProduct>
      <TextProduct h4>R$ {product.price.replace('.', ',')}</TextProduct>
      <TextProduct style={{color: '#606060'}}>
        {product.description}
      </TextProduct>
    </>
  );
};

export default Product;
