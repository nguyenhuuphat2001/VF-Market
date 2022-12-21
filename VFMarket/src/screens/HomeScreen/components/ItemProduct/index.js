import React from 'react';

import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, SPACING, OPENSANS_SEMIBOLD} from '@/theme/index';

import {SharedElement} from 'react-navigation-shared-element';

import Icon from 'react-native-vector-icons/MaterialIcons';
// arrow-drop-down

import Text from '@/components/Text';

import {IMAGE_CONTENT} from '@/assets/images';

const showPrice = value => {
  const price = +value;
  var moneyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return moneyFormatter.format(price);
};

const ItemProduct = ({id, name, image, price, currency}) => {
  return (
    <View style={styles.container}>
      <SharedElement id={`item.${id}.photo`}>
        <View style={styles.containerImage}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={image ? {uri: image} : IMAGE_CONTENT}
          />
        </View>
      </SharedElement>
      <View style={styles.content}>
        <Text customStyle={{fontSize: 14, color: 'black', fontWeight: '500'}}>
          {name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: 3,
          }}>
          <Icon name="location-pin" />
          <Text customStyle={{fontSize: 12, color: 'black'}}>
            TP. Hồ Chí Minh
          </Text>
        </View>
        <Text
          customStyle={{
            fontSize: 14,
            marginTop: 3,
            color: 'black',
            fontWeight: '500',
            fontFamily: OPENSANS_SEMIBOLD,
          }}>
          {showPrice(price)}
        </Text>
      </View>
    </View>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  container: {
    alignContent: 'flex-start',
    maxHeight: 280,
    marginBottom: SPACING.medium,
    borderRadius: 10,
  },
  containerImage: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
    borderColor: COLORS.border_input,
  },
  content: {
    marginLeft: 2,
  },
  image: {
    width: '100%',
    height: 100,
    maxHeight: 100,
    borderRadius: 10,
  },
});
