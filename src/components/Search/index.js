import React, {useCallback, useRef, useMemo, useState} from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import {COLORS, SPACING} from '@/theme/index';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Search = ({label = 'label', value = 'value', onPress, onChangeText}) => {
  return (
    <View style={[styles.container, styles.border]}>
      <View style={styles.horizontal}>
        <TextInput
          onPressIn={!onChangeText ? onPress : null}
          editable={!!onChangeText || false}
          onChangeText={onChangeText}
          style={styles.input}
          placeholder="Search "
        />
        <Icon name="search" style={[styles.icon]} />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.small,
    paddingVertical: Platform.OS == 'android' ? 0 : SPACING.small,
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
    alignItems: 'center',
  },
  input: {
    width: '80%',
    // marginVertical: 5
    // top: -3
  },
  icon: {
    fontSize: 25,
    top: 2,
  },
});
