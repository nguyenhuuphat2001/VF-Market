import React, {useCallback, useRef, useMemo, useState} from 'react';

import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, SPACING} from '@/theme/index';

import {SharedElement} from 'react-navigation-shared-element';

import Icon from 'react-native-vector-icons/MaterialIcons';
// arrow-drop-down

import Text from '@/components/Text';

import {IMAGE_CONTENT} from '@/assets/images';

const ItemCourse = ({id, name, image, price, currency}) => {
  return (
    <View style={styles.container}>
      <SharedElement id={`item.${id}.photo`}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={image ? {uri: image} : IMAGE_CONTENT}
        />
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
          <Text customStyle={{fontSize: 12, marginLeft: 2, width: '200%'}}>
            TP. Hồ Chí Minh
          </Text>
        </View>
        <Text
          customStyle={{
            fontSize: 12,
            marginTop: 5,
            color: 'black',
            fontWeight: '500',
          }}>
          $ {price}
          {currency}
        </Text>
      </View>
    </View>
  );
};

export default ItemCourse;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    alignContent: 'flex-start',
    // flex: 1,
    maxHeight: 280,
    marginBottom: SPACING.large,
    // backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: 100,
    maxHeight: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
});
