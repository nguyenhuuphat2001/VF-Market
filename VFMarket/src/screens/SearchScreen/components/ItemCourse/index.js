import React, {useCallback, useRef, useMemo, useState} from 'react';

import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS} from '@/theme/index';

import Icon from 'react-native-vector-icons/MaterialIcons';
// arrow-drop-down

import Text from '@/components/Text';

import {
  ITEM_COURSE,
  LOCATION,
  DUMBBELL,
  MEDITATION,
  BOXING,
} from '@/assets/images';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const ItemCourse = ({label = 'label', value = 'value', onChange}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="cover" source={ITEM_COURSE} />
      <View style={styles.content}>
        <Text customStyle={{fontSize: 14, color: 'black', fontWeight: '500'}}>
          Elite Fitness
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          {/* <Image style={{ width:20 }} resizeMode="contain" source={LOCATION} /> */}

          <Icon name="location-pin" />
          <Text customStyle={{fontSize: 10, marginLeft: 10, width: '80%'}}>
            Quận 10, TP. Hồ Chí Minh Khoảng cách: 1.5 km
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor: COLORS.border_color,
              paddingHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
            }}>
            <Image style={{width: 15}} resizeMode="contain" source={BOXING} />
          </View>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor: COLORS.border_color,
              paddingHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              marginHorizontal: 10,
            }}>
            <Image
              style={{width: 15}}
              resizeMode="contain"
              source={MEDITATION}
            />
          </View>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor: COLORS.border_color,
              paddingHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
            }}>
            <Image style={{width: 15}} resizeMode="contain" source={DUMBBELL} />
          </View>
        </View>
        <View>
          <Text
            customStyle={{
              fontSize: 12,
              marginTop: 10,
              textDecorationLine: 'line-through',
            }}>
            1.980.000 đ
          </Text>

          <Text
            customStyle={{
              fontSize: 14,
              marginTop: 5,
              color: 'black',
              fontWeight: '500',
            }}>
            2.980.000 đ
          </Text>
        </View>
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
  },
  image: {
    width: '100%',
    maxHeight: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
});
