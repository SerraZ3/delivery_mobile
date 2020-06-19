import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import {TextProduct} from './styles';

import {
  PRIMARY_COLOR_DARK,
  PRIMARY_COLOR_DARK_TRANSPARENT,
} from 'react-native-dotenv';

const Product = ({params, product}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const mapImages = (data) => {
      let newImages = data.images.map((image) => {
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
          imageLoadingColor={PRIMARY_COLOR_DARK}
          dotColor={PRIMARY_COLOR_DARK}
          inactiveDotColor={PRIMARY_COLOR_DARK_TRANSPARENT}
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
