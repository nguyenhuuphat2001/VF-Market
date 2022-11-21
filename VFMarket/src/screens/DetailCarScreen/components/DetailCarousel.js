import React, {useState} from 'react';
import {View, Image, Dimensions, Text, FlatList} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {IMAGE_CONTENT} from '@/assets/images';
import {
  COLORS,
  SPACING,
  MONT_BOLD,
  FONT_SIZE,
  MONT_REGULAR,
  MONT_MEDIUM,
} from '@/theme/index';

const IMG_DEFAULT = [
  IMAGE_CONTENT,
  IMAGE_CONTENT,
  IMAGE_CONTENT,
  IMAGE_CONTENT,
];

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const renderItem = ({item, index}) => {
  return (
    <View
      style={{
        borderRadius: 0,
        height: 250,
      }}>
      <Image
        style={{minHeight: '100%'}}
        source={{uri: item}}
        resizeMode="cover"
      />
    </View>
  );
};

const DetailCarousel = ({images}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View>
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={images}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH}
        itemHeight={ITEM_HEIGHT}
        inactiveSlideOpacity={1}
        layout={'default'}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <View
        style={{
          position: 'absolute',
          bottom: -SPACING.innerContainer,
          left: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={images.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: COLORS.white,
          }}
          inactiveDotStyle={{}}
          inactiveDotOpacity={1}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};

export default DetailCarousel;
