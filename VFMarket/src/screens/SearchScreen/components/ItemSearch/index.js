import React, {useCallback, useRef, useMemo, useState} from 'react';

import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS} from '@/theme/index';

import Icon from 'react-native-vector-icons/MaterialIcons';
// arrow-drop-down

import Text from '@/components/Text';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const ItemSearch = ({label = 'label', value = 'value', onChange}) => {
  return (
    <View style={styles.container}>
      <Icon name="location-pin" style={{fontSize: 25, marginRight: 10}} />
      <View style={styles.content}>
        <Text customStyle={{fontSize: 14, color: 'black', fontWeight: '400'}}>
          Elite Fitness
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Text customStyle={{fontSize: 10}}>
            Quận 10, TP. Hồ Chí Minh Khoảng cách: 1.5 km
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemSearch;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    alignContent: 'flex-start',
    // flex: 1,
    // maxHeight: 280,
    marginBottom: 20,
    width: '100%',
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    // maxHeight: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
});
