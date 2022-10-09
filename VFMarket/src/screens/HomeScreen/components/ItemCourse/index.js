import React, {useCallback, useRef, useMemo, useState} from 'react';

import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS} from '@/theme/index';

import Icon from 'react-native-vector-icons/MaterialIcons';
// arrow-drop-down

import Text from '@/components/Text';

import {
  IMAGE_CONTENT,
  LOCATION,
  DUMBBELL,
  MEDITATION,
  BOXING,
} from '@assets/images';

import {widthPercentageToDP} from 'react-native-responsive-screen';

const ItemCourse = ({label = 'label', value = 'value', onChange}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="cover" source={IMAGE_CONTENT} />
      <View style={styles.content}>
        <Text customStyle={{fontSize: 14, color: 'black', fontWeight: '500'}}>
          Vinfast VF8
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
            fontSize: 13,
            marginTop: 5,
            color: 'black',
            fontWeight: '500',
          }}>
          $ 189.000
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
    maxHeight: 180,
    // backgroundColor: 'red',
  },
  image: {
    width: '100%',
    maxHeight: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
});
