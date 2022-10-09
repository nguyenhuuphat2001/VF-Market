import React, {useCallback, useRef, useMemo, useState} from 'react';

import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {COLORS} from '@/theme/index';

import Icon from 'react-native-vector-icons/MaterialIcons';
// arrow-drop-down

import ContainerInput from '../ContainerInput';

import Text from '../Text';

const Search = ({label = 'label', value = 'value', onChange}) => {
  return (
    <View style={[styles.container, styles.border]}>
      <View style={styles.horizontal}>
        <TextInput
          //   editable={false}
          style={styles.input}
          placeholder="Tìm kiếm  "
        />
        <Icon name="search" style={[styles.icon]} />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    backgroundColor: COLORS.gray_light,
  },

  border: {
    borderRadius: 10,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'flex-end',
  },
  input: {
    // marginVertical: 5
    top: -3,
  },
  icon: {
    fontSize: 25,
    top: 2,
  },
});
